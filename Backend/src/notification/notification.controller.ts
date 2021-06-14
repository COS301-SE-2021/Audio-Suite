import { Body, Controller, Get, PayloadTooLargeException, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';

@Controller('api')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService){}

    @Get('notifications/allNotifications')
    getNotifications(): any{
        return this.notificationService.getNotification();
    }

    @Post('notifications/createNotification')
    async createNotification(
        @Body('userID') userID: string,
        @Body('type') type: string,
        @Body('link') link: string,
        @Body('jwt') jwt: string
    ){
        return await this.notificationService.createNotification(userID, type, link, jwt);
    }

    @Post('notifications/sendEmail')
    async sendEmail(
        @Body('emailAdress') emailAddress: string,
        @Body('type') type: string,
        @Body('payload') payload: string
    ){
        return await this.notificationService.sendEmail(emailAddress, type, payload);
    }

    @Post('notifications/changeEmail')
    async changeEmail(
        @Body('read') read: boolean,
        @Body('createdDate') createdDate: Date,
        @Body('userID') userID: string,
        @Body('jwt') jwt: string
    ){
        return await this.notificationService.changeNotification(read, createdDate, userID, jwt);
    }

    @Post('notifications/retrieveNotification')
    async retrieveNotification(
        @Body('userID') userID: string,
        @Body('unread') unread: boolean,
        @Body('jwt') jwt: string
    ){
        return await this.notificationService.retrieveEmail(userID, unread, jwt);
    }
}
