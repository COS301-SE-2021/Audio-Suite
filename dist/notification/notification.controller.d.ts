import { NotificationService } from './notification.service';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    getNotifications(): any;
    createNotification(userID: string, type: string, invite: string, userName: string, emailAddress: string, password: string): Promise<any>;
    sendEmail(emailAddress: string, name: string, inviteCode: string): Promise<any>;
    sendVarification(emailAddress: string, userName: string): Promise<any>;
    changeNotification(read: boolean, createdDate: Date, userID: string, password: string): Promise<any>;
    retrieveNotification(userID: string, unread: boolean, password: string): Promise<any>;
}
