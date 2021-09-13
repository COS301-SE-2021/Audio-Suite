import { Body, Controller, Post } from '@nestjs/common';
import { TimeTrackerProjectService } from './time-tracker-project.service';

@Controller('api/time-tracker/project')
export class TimeTrackerProjectController {
    constructor(private readonly timeTrackerProjectService: TimeTrackerProjectService){}

    @Post('register')
    async registerProject(
        @Body('jwt') jwt: string,
        @Body('officeID') officeID: number,
        @Body('projectName') projectName: string
    ){
        return await this.timeTrackerProjectService.registerNewProject(jwt, officeID, projectName);
    }

    @Post('removeByID')
    async removeProjectByID(
        @Body('jwt') jwt: string,
        @Body('id') id: number,
    ){
        return await this.timeTrackerProjectService.removeProjectByID(jwt, id);
    }

    @Post('removeByName')
    async removeProjectByName(
        @Body('jwt') jwt: string,
        @Body('officeID') officeID: number,
        @Body('projectName') projectName: string
    ){
        return await this.timeTrackerProjectService.removeProjectByName(jwt, officeID, projectName);
    }

    @Post('getOfficeProjects')
    async getAllOfficeProjects(
        @Body('jwt') jwt: string,
        @Body('officeID') officeID: number
    ){
        return await this.timeTrackerProjectService.getAllOfficeProject(jwt, officeID);
    }
}
