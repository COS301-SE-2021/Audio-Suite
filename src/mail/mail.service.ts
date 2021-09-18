import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/user/user.entity';

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) {};

    async sendVarificationEmail(emailAddress: string, userName: string, otp: number){
        //send email
        await this.mailerService.sendMail({
            to: emailAddress,
            subject: "OTP Verification",
            template: './confirmation',
            context: {
                name: userName,
                otp,
            },
        });
    }

    async sendInviteEmail(emailAddress: string, name: string, inviteCode: string){
        //send email
        await this.mailerService.sendMail({
            to: emailAddress,
            subject: "Office invite link",
            template: './sendInvite',
            context: {
                name: name,
                inviteCode: inviteCode,
            },
        });
    }
}
