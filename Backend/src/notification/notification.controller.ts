import { Body, Controller, PayloadTooLargeException, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('api')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService){}

    @Post('notification/createNotification')
    async createNotification(
        @Body('userID') userID: string,
        @Body('type') type: string,
        @Body('link') link: string,
        @Body('jwt') jwt: string
    ){
        return await this.notificationService.createNotification(userID, type, link, jwt);
    }

    @Post('notification/sendEmail')
    async sendEmail(
        @Body('emailAdress') emailAddress: string,
        @Body('type') type: string,
        @Body('payload') payload: string,
        @Body('jwt') jwt: string
    ){
        return await this.notificationService.sendEmail(emailAddress, type, payload, jwt);
    }

    @Post('notification/changeEmail')
    async changeEmail(
        @Body('read') read: boolean,
        @Body('createdDate') createdDate: Date,
        @Body('jwt') jwt: string
    ){
        return await this.notificationService.changeNotification(read, createdDate, jwt);
    }

    @Post('notification/retrieveNotification')
    async retrieveNotification(
        @Body('userID') userID: string,
        @Body('unread') unread: boolean,
        @Body('jwt') jwt: string
    ){
        return await this.notificationService.retrieveEmail(userID, unread, jwt);
    }
}
