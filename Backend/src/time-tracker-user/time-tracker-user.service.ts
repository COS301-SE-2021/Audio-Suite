import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { TimeTrackerUser } from './time-tracker-user.entity';

@Injectable()
export class TimeTrackerUserService {
    constructor(
        @InjectRepository(TimeTrackerUser)
        private timetrackerUserRepository: Repository<TimeTrackerUser>,
        private userService: UserService
    ){}

    async addNewTimeTrackingInstance(
        jwt: string, 
        officeID: number, 
        description: string, 
        projectID: number, 
        tagID: number, 
        startTime: string,
        endTime: string)
    {
        //Validate whether the jwt belongs to a valid user.
        try{
            const user = await this.userService.validateUser(jwt);
            if(user == null){
                throw new UnauthorizedException();
            }
        }catch(err){
            throw new UnauthorizedException();
        }

        //Add the new tracking instance to the repository
        try{
            const user = await this.userService.validateUser(jwt);
            const newTrackingInstance = await this.timetrackerUserRepository.create({
                userID: user.id, 
                officeID, 
                description, 
                projectID, 
                tagID, 
                startTime, 
                endTime
            });
            const savedTrackingInstance = await this.timetrackerUserRepository.save(newTrackingInstance);

            return {
                Response: "Success",
                TrackingInstance: savedTrackingInstance
            }
        }
        catch(err){
            throw new BadRequestException('Could not add time tracking instance to repository')
        }
    }

    // async getStartTimeByID(jwt: string, officeID: number){
    //     //Validate whether the jwt belongs to a valid user.
    //     try{
    //         const user = await this.userService.validateUser(jwt);
    //         if(user == null){
    //             throw new UnauthorizedException();
    //         }
    //     }catch(err){
    //         throw new UnauthorizedException();
    //     }

    //     //Get the start time of a time tracking instance by officeID, UserID and a null endTime
    //     try{
    //         const user = await this.userService.validateUser(jwt);
    //         const trackingInstance = await this.timetrackerUserRepository.findOneOrFail({
    //             userID: user.id,
    //             officeID,
    //             endTime: null
    //         });
            
    //         return {
    //             Response: "Success",
    //             trackingInstance: trackingInstance
    //         }
    //     }
    //     catch(err){
    //         throw new BadRequestException('Could not find a tracking instance that is not still running');
    //     }
    // }

    // async setEndTime(jwt: string, id: number, endTime: Date){
    //     //Validate whether the jwt belongs to a valid user.
    //     try{
    //         const user = await this.userService.validateUser(jwt);
    //         if(user == null){
    //             throw new UnauthorizedException();
    //         }
    //     }catch(err){
    //         throw new UnauthorizedException();
    //     }

    //     try{
    //         const oldTrackingInstance = await this.timetrackerUserRepository.findOneOrFail({id});
    //         const newTrackingInstance = await this.timetrackerUserRepository.create({
    //             id: oldTrackingInstance.id,
    //             userID: oldTrackingInstance.userID,
    //             officeID: oldTrackingInstance.officeID,
    //             description: oldTrackingInstance.description,
    //             projectID: oldTrackingInstance.projectID,
    //             tagID: oldTrackingInstance.tagID,
    //             startTime: oldTrackingInstance.startTime,
    //             endTime: endTime
    //         });
    //         const savedTrackingInstance = await this.timetrackerUserRepository.save(newTrackingInstance);
            
    //         return {
    //             Response: "Success",
    //             UpdatedTrackingInstance: savedTrackingInstance
    //         }
    //     }
    //     catch(err){
    //         throw new BadRequestException('Could not set new end time for tracking instance');
    //     }
    // }

    async getAllUserOfficeTrackingInstances(jwt: string, officeID: number): Promise<any>{
        //Validate whether the jwt belongs to a valid user.
        try{
            const user = await this.userService.validateUser(jwt);
            if(user == null){
                throw new UnauthorizedException();
            }
        }catch(err){
            throw new UnauthorizedException();
        }

        try{
            const user = await this.userService.validateUser(jwt);
            const userOfficeTrackingInstances = await this.timetrackerUserRepository.find({
                userID: user.id,
                officeID
            });
            
            return {
                Response: "Success",
                TrackingInstances: userOfficeTrackingInstances
            }
        }
        catch(err){
            throw new BadRequestException('Could not return all users ')
        }
    }
}
