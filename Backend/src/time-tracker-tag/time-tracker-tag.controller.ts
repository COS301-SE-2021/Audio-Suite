import { Body, Controller, Post } from '@nestjs/common';
import { TimeTrackerTagService } from './time-tracker-tag.service';

@Controller('api/time-tracker/project')
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

    @Post('reomove')
    async removeProject(
        @Body('jwt') jwt: string,
        @Body('officeID') officeID: number,
        @Body('tagName') tagName: string
    ){
        return await this.timeTrackerTagService.removeTag(jwt, officeID, tagName);
    }
}
