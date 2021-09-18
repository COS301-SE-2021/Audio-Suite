import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { TimeTrackerTag } from './time-tracker-tag.entity';

@Injectable()
export class TimeTrackerTagService {
    constructor(
        @InjectRepository(TimeTrackerTag)
        private timeTrackerTagRepository: Repository<TimeTrackerTag>,
        private userService: UserService
    ){}

    async registerNewTag(jwt: string, officeID: number, tag: string){
        //Validate whether the jwt belongs to a valid user.
        try{
            const user = await this.userService.validateUser(jwt);
            if(user == null){
                throw new UnauthorizedException();
            }
        }catch(err){
            throw new UnauthorizedException();
        }

        //check to see if tag already exists in office
        try{
            const tags = await this.timeTrackerTagRepository.find({officeID, tag});
            if(tags.length > 0){
                throw new BadRequestException('Tag already exists in current office.');
            }
        }
        catch(err){
            throw new BadRequestException('Tag already exists in current office.')
        }

        //Add Tag to the database
        try{
            const newTag = await this.timeTrackerTagRepository.create({officeID, tag});
            const savedTag = await this.timeTrackerTagRepository.save(newTag);

            return {
                Response: "Success",
                Tag: savedTag
            }
        }
        catch(err){
            throw new BadRequestException('Unable to save Tag')
        }
    }

    async removeTag(jwt: string, officeID: number, tag: string): Promise<any>{
        //Validate whether the jwt belongs to a valid user.
        try{
            const user = await this.userService.validateUser(jwt);
            if(user == null){
                throw new UnauthorizedException();
            }
        }catch(err){
            throw new UnauthorizedException();
        }

        //Remove project from given office
        try{
            const existingTag = await this.timeTrackerTagRepository.findOneOrFail({officeID, tag});
            const deletedTag = await this.timeTrackerTagRepository.remove(existingTag);
            
            return {
                Response: "Success",
                DeletedTag: deletedTag
            }
        }
        catch(err){
            throw new BadRequestException('Could not find a tag with the given name in the given office.')
        }
    }

    async getAllOfficeTags(jwt: string, officeID): Promise<any>{
        //Validate whether the jwt belongs to a valid user.
        try{
            const user = await this.userService.validateUser(jwt);
            if(user == null){
                throw new UnauthorizedException();
            }
        }catch(err){
            throw new UnauthorizedException();
        }

        //gets all the tags belonging to an office and returning them
        try{
            const tags = await this.timeTrackerTagRepository.find({officeID});

            return {
                Response: "Success",
                Tags: tags
            }
        }
        catch(err){
            throw new BadRequestException('Could not find any tags with the officeID')
        }
    }
}
