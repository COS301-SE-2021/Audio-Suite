import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository, RepositoryNotFoundError } from 'typeorm';

@Injectable()
export class NotificationService {
    constructor(
        @InjectRepository(Notification)
        private notificationRepository : Repository<Notification>,
        private userService: UserService
    ) {}

    //create the notification
    async createNotification(userID: string, type: string, link: string, jwt: string) : Promise<any>{
        //check for valid user
        try{
            const user = await this.userService.validateUser(jwt);
        }catch(err){
            throw new UnauthorizedException;
        }

        //create the notification of no error was thrown
        try{
            //create the variables for the notification
            const payload = await this.createType(type);
            const notificationType = await this.getNotificationType(type);
            
            //add notification
            const addNotification = await this.addNotification(payload, userID, new Date(), notificationType)
            return addNotification;
        }catch(err){
            throw new HttpException("Could not add notification to database", 400);
        }
    }

    //helper function for createNotification
    protected createType(type: string){
        return null;
    }
    protected getNotificationType(type: string){
        return null;
    }
    protected addNotification(payload: string, userID: string, date: Date, notificationType: string){
        const nullValue = null;
        const notification = this.notificationRepository.create({payload, userID, nullValue, date, notificationType})
        const addNotification = this.notificationRepository.save(notification);
        return addNotification;
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
