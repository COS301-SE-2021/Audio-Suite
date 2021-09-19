import { Body, Controller, Post } from '@nestjs/common';
import { TimeTrackerTagService } from './time-tracker-tag.service';

@Controller('api/time-tracker/tag')
export class TimeTrackerTagController {
    constructor(private readonly timeTrackerTagService: TimeTrackerTagService){}

    @Post('register')
    async registerProject(
        @Body('jwt') jwt: string,
        @Body('officeID') officeID: number,
        @Body('tagName') tagName: string
    ){
        return await this.timeTrackerTagService.registerNewTag(jwt, officeID, tagName);
    }

    @Post('remove')
    async removeProject(
        @Body('jwt') jwt: string,
        @Body('officeID') officeID: number,
        @Body('tagName') tagName: string
    ){
        return await this.timeTrackerTagService.removeTag(jwt, officeID, tagName);
    }

    @Post('getOfficeTags')
    async getOfficeTags(
        @Body('jwt') jwt: string,
        @Body('officeID') officeID: number
    ){
        return await this.timeTrackerTagService.getAllOfficeTags(jwt, officeID);
    }
}
