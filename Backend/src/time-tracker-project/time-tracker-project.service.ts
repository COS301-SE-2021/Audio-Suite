import { BadRequestException, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { TimeTrackerProject } from './time-tracker-project.entity';

@Injectable()
export class TimeTrackerProjectService {
    constructor(
        @InjectRepository(TimeTrackerProject)
        private timeTrackerProjectRepository: Repository<TimeTrackerProject>,
        private userService: UserService
    ){}

    async registerNewProject(jwt: string, officeID: number, projectName: string): Promise<any>{
        //Validate whether the jwt belongs to a valid user.
        try{
            const user = await this.userService.validateUser(jwt);
            if(user == null){
                throw new UnauthorizedException();
            }
        }catch(err){
            throw new UnauthorizedException();
        }

        //check to see if project already exists in office
        try{
            const projects = await this.timeTrackerProjectRepository.find({officeID, project: projectName});
            if(projects.length > 0){
                throw new BadRequestException('Project already exists in current office.');
            }
        }
        catch(err){
            throw new BadRequestException('Project already exists in current office.')
        }

        //Add project to the database
        try{
            const newProject = await this.timeTrackerProjectRepository.create({officeID, project: projectName});
            const savedProject = await this.timeTrackerProjectRepository.save(newProject);

            return {
                Response: "Success",
                Project: savedProject
            }
        }
        catch(err){
            throw new BadRequestException(err)
        }
    }

    async removeProjectByID(jwt: string, id: number): Promise<any>{
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
            const project = await this.timeTrackerProjectRepository.findOneOrFail({id});
            const deletedProject = await this.timeTrackerProjectRepository.remove(project);
            
            return {
                Response: "Success",
                DeletedProject: deletedProject
            }
        }
        catch(err){
            throw new BadRequestException('Could not find a project with the given id.')
        }
    }

    async removeProjectByName(jwt: string, officeID: number, projectName: string): Promise<any>{
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
            const project = await this.timeTrackerProjectRepository.findOneOrFail({officeID, project: projectName});
            const deletedProject = await this.timeTrackerProjectRepository.remove(project);
            
            return {
                Response: "Success",
                DeletedProject: deletedProject
            }
        }
        catch(err){
            throw new BadRequestException('Could not find a project with the given name in the given office.')
        }
    }

    async getAllOfficeProject(jwt: string, officeID: number): Promise<any>{
        //Validate whether the jwt belongs to a valid user.
        try{
            const user = await this.userService.validateUser(jwt);
            if(user == null){
                throw new UnauthorizedException();
            }
        }catch(err){
            throw new UnauthorizedException();
        }

        //gets all the projects belonging to an office and returning them
        try{
            const projects = await this.timeTrackerProjectRepository.find({officeID});

            return {
                Response: "Success",
                Projects: projects
            }
        }
        catch(err){
            throw new BadRequestException('Could not find any projects with the officeID')
        }
    }
}
