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
        @Body('email') email: string,
        @Body('password') password: string
    ){
        return await this.notificationService.createNotification(userID, type, link, email, password);
    }

    @Post('notifications/sendInviteCode')
    async sendEmail(
        @Body('emailAddress') emailAddress: string,
        @Body('name') name: string,
        @Body('inviteCode') inviteCode: string
    ){
        return await this.notificationService.sendInviteCodeEmail(emailAddress, name, inviteCode);
    }

    @Post('notifications/sendVerification')
    async sendVarification(
        @Body('emailAddress') emailAddress: string,
        @Body('userName') userName: string,
    ){
        return await this.notificationService.createOTP(emailAddress, userName);
    }

    @Post('notifications/changeNotification')
    async changeNotification(
        @Body('read') read: boolean,
        @Body('createdDate') createdDate: Date,
        @Body('userID') userID: string,
        @Body('password') password: string
    ){
        return await this.notificationService.changeNotification(read, createdDate, userID, password);
    }

    @Post('notifications/retrieveNotification')
    async retrieveNotification(
        @Body('userID') userID: string,
        @Body('unread') unread: boolean,
        @Body('password') password: string
    ){
        return await this.notificationService.retrieveEmail(userID, unread, password);
    }
}
