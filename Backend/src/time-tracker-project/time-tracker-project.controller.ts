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

    @Post('reomove')
    async removeProject(
        @Body('jwt') jwt: string,
        @Body('officeID') officeID: number,
        @Body('projectName') projectName: string
    ){
        return await this.timeTrackerProjectService.removeProject(jwt, officeID, projectName);
    }
}
