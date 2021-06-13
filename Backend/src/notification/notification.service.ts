import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
import { UserService } from 'src/user/user.service';
import { Repository, RepositoryNotFoundError } from 'typeorm';
import { Notifications } from './notification.entity';
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

@Injectable()
export class NotificationService {
    constructor(
        @InjectRepository(Notifications)
        private notificationRepository : Repository<Notifications>,
        private userService: UserService
    ) {}

    async getNotification() : Promise<Notifications[]>{
        return this.notificationRepository.find();

    }

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
            throw new HttpException("Could not add notification to database", 500);
        }
    }

    //helper function for createNotification
    protected createType(type: string){
        return type;
    }
    protected getNotificationType(type: string){
        return type;
    }
    protected addNotification(payload: string, userID: string, createdDateTime: Date, notificationType: string){
        const readDateTime = null;
        const notification = this.notificationRepository.create({payload, userID, readDateTime, createdDateTime, notificationType});
        const addNotification = this.notificationRepository.save(notification);
        return addNotification;
    }

    //sending an email
    async sendEmail(emailAddress: string, type: string, payload: string, jwt: string) : Promise<any>{
        //check for valid user
        try{
            const user = await this.userService.validateUser(jwt);

        }catch(err){
            throw new UnauthorizedException;

        }

        //send email
        try{
            //check that email is valied
            if(this.validateEmail(emailAddress)){

                //check to make sure the email has body and such
                if(true){

                    //send email
                    const hostname = "smtp.office365.com";
                    const username = "projectpegasusdevs@outlook.com";
                    const password = "PrOjEcTpEgAsUs";
            
                    const transporter = nodemailer.createTransport({
                        host: hostname,
                        port: 587,
                        secure: false,
                        requireTLS: true,
                        auth: {
                            user: username,
                            pass: password,
                        },
                        logger: true
            
                    });
                    const sendEmail = await transporter.sendMail({
                        from: '"Project Pegasus" <projectpegasusdevs@outlook.com>',
                        to: emailAddress,
                        subject: type,
                        text: payload,

                    });

                    //return the response
                    return {
                        status: "Success",
                        response: "Email Sent",
                    }
                    

                } else{
                    throw ("Missing required information")

                }

            } else{
                throw ("The email failed to send")

            }

        } catch(err){
            throw err;
        }
    }

    //helper functions for sending emails 
    protected validateEmail(email: string){
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return true;
    }
    protected createTransport(){
        const hostname = "smtp.office365.com";
        const username = "projectpegasusdevs@outlook.com";
        const password = "PrOjEcTpEgAsUs";

        const transporter = nodemailer.createTransport({
            host: hostname,
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: username,
                pass: password,
            },
            logger: true

        });
        return transporter;
    }

    //change notification type
    async changeNotification(read: boolean, createdDate: Date, userID: string, jwt: string) : Promise<any>{
        //check for valid user
        try{
            const user = await this.userService.validateUser(jwt);
        }catch(err){
            throw new UnauthorizedException;
        }

        //get the notification and change it 
        try{
            //get the notification
            const getNotification = await this.notificationRepository.find({createdDateTime: createdDate, userID: userID});

            //check how many notifications to send 
            if(read){
                getNotification[0].createdDateTime = new Date();
            } else{
                getNotification[0].createdDateTime = null;
            }

            //return the response object
            return {
                status: "Success",
                response: "Notification has been changed",
                notification: getNotification
            }

        }catch(err){
            throw new HttpException("Notification could not be changed", 503)
        }

    }

    //receiving notification
    async retrieveEmail(userID: string, unread: boolean, jwt: string) : Promise<any>{
        //check for valid user
        try{
            const user = await this.userService.validateUser(jwt);
        }catch(err){
            throw new UnauthorizedException;
        }

        //get all the notifications for returning
        try{
            //get all the users notifications 
            const allUserNotifications = this.notificationRepository.find({userID: userID});

            //check if all read or unread notifications
            if(unread){
                //create new array for storing notnificatiosn
                const notificationWithoutRead = [];

                //run through each of the notifications and check if its read or not
                for (let i = 0; i < (await allUserNotifications).length; i++){

                    //check if its been read or not
                    if(allUserNotifications[i].readDateTime == null){
                        notificationWithoutRead.push(allUserNotifications[i])
                    }
                    
                }

                //return the new array
                return notificationWithoutRead;

            } else{
                return allUserNotifications;

            }

        }catch(err){
            throw new HttpException("Could not find notifications", 404)

        }

    }
}
