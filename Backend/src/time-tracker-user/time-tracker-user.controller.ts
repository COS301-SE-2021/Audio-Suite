import { Body, Controller, Post } from '@nestjs/common';
import { TimeTrackerUserService } from './time-tracker-user.service';

@Controller('api/time-tracker/user')
export class TimeTrackerUserController {
    constructor(private readonly timeTrackerUserService: TimeTrackerUserService){}

    @Post('registerTrackingInstance')
    async registerTrackingInstance(
        @Body('jwt') jwt: string,
        @Body('officeID') officeID: number,
        @Body('description') description: string,
        @Body('projectID') projectID: number,
        @Body('tagID') tagID: number,
        @Body('startTime') startTime: string,
        @Body('endTime') endTime: string,
    ){
        return await this.timeTrackerUserService.addNewTimeTrackingInstance(
            jwt, 
            officeID, 
            description, 
            projectID, 
            tagID, 
            startTime, 
            endTime
        );
    }

    @Post('getTrackingInstances')
    async getTrackingInstances(
        @Body('jwt') jwt: string,
        @Body('officeID') officeID: number,
    ){
        return await this.timeTrackerUserService.getAllUserOfficeTrackingInstances(jwt, officeID);
    }
}
