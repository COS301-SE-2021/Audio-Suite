import { MailerService } from '@nestjs-modules/mailer';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendVarificationEmail(emailAddress: string, userName: string, otp: number): Promise<void>;
    sendInviteEmail(emailAddress: string, name: string, inviteCode: string): Promise<void>;
}
