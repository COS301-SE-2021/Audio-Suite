import { UserService } from '../user/user.service';
import { Repository } from 'typeorm';
import { Notifications } from './notification.entity';
import { MailService } from '../mail/mail.service';
export declare class NotificationService {
    private notificationRepository;
    private userService;
    private mailerService;
    constructor(notificationRepository: Repository<Notifications>, userService: UserService, mailerService: MailService);
    getNotification(): Promise<Notifications[]>;
    createNotification(userID: string, type: string, invite: string, userName: string, emailAddress: string, password: string): Promise<any>;
    protected createType(type: string): string;
    protected getNotificationType(type: string): string;
    protected addNotification(payload: string, userID: string, createdDateTime: Date, notificationType: string): Promise<Notifications>;
    sendEmail(emailAddress: string, type: string, payload: string): Promise<any>;
    sendInviteCodeEmail(emailAddress: string, name: string, inviteCode: string): Promise<any>;
    protected validateEmail(email: string): boolean;
    createOTP(emailAddress: string, userName: string): Promise<any>;
    changeNotification(read: boolean, createdDate: Date, userID: string, password: string): Promise<any>;
    retrieveEmail(userID: string, unread: boolean, password: string): Promise<any>;
}
