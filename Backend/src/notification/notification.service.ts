import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
    constructor(

    ) {}

    //create the notification
    async createNotification(userID: string, type: string, link: string, jwt: string) : Promise<any>{

    }

    //sending an email
    async sendEmail(emailAddress: string, type: string, payload: string, jwt: string) : Promise<any>{

    }

    //change notification type
    async changeNotification(read: boolean, createdDate: Date, jwt: string) : Promise<any>{

    }

    //receiving notification
    async retrieveEmail(userID: string, unread: boolean, jwt: string) : Promise<any>{

    }
}
