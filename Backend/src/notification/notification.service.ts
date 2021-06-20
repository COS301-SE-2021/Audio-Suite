import { BadRequestException, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
import { UserService } from 'src/user/user.service';
import { Connection, Repository, RepositoryNotFoundError } from 'typeorm';
import { Notifications } from './notification.entity';
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class NotificationService {
    constructor(
        @InjectRepository(Notifications)
        private notificationRepository : Repository<Notifications>,
        private userService: UserService,
        private mailerService: MailService
    ) {}

    async getNotification() : Promise<Notifications[]>{
        return this.notificationRepository.find();

    }

    //create the notification
    async createNotification(userID: string, type: string, link: string, emailAddress: string, password: string) : Promise<any>{
        //check for valid user
        if(password === "test"){
            //create the notification of no error was thrown
            try{
                //create the variables for the notification
                const payload = await this.createType(type);
                const notificationType = await this.getNotificationType(type);
                
                //add notification
                const addNotification = this.addNotification(payload, userID, new Date(), notificationType)

                //send emails
                this.sendEmail(emailAddress, type, payload);

                //return the created notification
                return addNotification;

            }catch(err){
                throw new HttpException("Could not add notification to database", 500);
            }
        } else{
            throw new UnauthorizedException;
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
        const readDateTime = false ;
        const notification = this.notificationRepository.create({payload, userID, readDateTime, createdDateTime, notificationType});
        const addNotification = this.notificationRepository.save(notification);
        return addNotification;
    }

    async sendEmail(emailAddress: string, type: string, payload: string): Promise<any>{
        //send email
        try{
            //check that email is valied
            if(this.validateEmail(emailAddress)){

                //send the emailAddress

            } 
            else{
                throw new BadRequestException("Could not send invite code email");
            }

        } catch(err){
            throw new BadRequestException("Could not send invite code email");
        }
    }

    //sending an email
    async sendInviteCodeEmail(emailAddress: string, name: string, inviteCode: string) : Promise<any>{
        //send email
        try{
            //check that email is valied
            if(this.validateEmail(emailAddress)){

                //send the emailAddress
                this.mailerService.sendInviteEmail(emailAddress, name, inviteCode);
                return{
                    Response: "Success",
                    Message: "Invite code sent successfully"
                }

            } 
            else{
                throw new BadRequestException("Could not send invite code email");
            }

        } catch(err){
            throw new BadRequestException("Could not send invite code email");
        }
    }

    //helper functions for sending emails 
    protected validateEmail(email: string){
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return true;
    }

    //create OTP and email it 
    async createOTP(emailAddress: string, userName: string): Promise<any>{
        
        //create the OTP
        const crypto = require("crypto");
        const n = crypto.randomInt(0, 1000000);
        const OTP = n.toString().padStart(6, "0");

        //send email
        this.mailerService.sendVarificationEmail(emailAddress, userName, OTP);

        //return OTP for validation
        return {
            success: "success",
            otp: OTP
        };
    }

    //change notification type
    async changeNotification(read: boolean, createdDate: Date, userID: string, password: string) : Promise<any>{
        //check for valid user
        if(password === "test"){

            //get the notification and change it 
            try{
                //get the notification
                const getNotification = await this.notificationRepository.find({userID: userID});
                let notificationFound = new Notifications()

                //find the correct time of created notification
                for (let i = 0; i < getNotification.length; i++) {

                    if(getNotification[i].createdDateTime.getTime() === new Date(createdDate).getTime()){

                        getNotification[i].readDateTime = read;
                        notificationFound = getNotification[i];
                        break;

                    }

                }

                this.notificationRepository.save(notificationFound);
                
                //return the response object
                return {
                    status: "Success",
                    response: "Notification has been changed",
                    notification: notificationFound
                }

            }catch(err){
                throw err

            }

        }

    }

    //receiving notification
    async retrieveEmail(userID: string, unread: boolean, password: string) : Promise<any>{
        //check for valid user
        if(password === "test"){

            //get all the notifications for returning
            try{
                //get all the users notifications 
                const allUserNotifications = await this.notificationRepository.find({userID: userID});

                //check if all read or unread notifications
                if(unread){
                    //create new array for storing notnificatiosn
                    const notificationWithoutRead = [];

                    //run through each of the notifications and check if its read or not
                    for (let i = 0; i < (await allUserNotifications).length; i++){

                        //check if its been read or not
                        if(allUserNotifications[i].readDateTime == false){
                            notificationWithoutRead.push(allUserNotifications[i])
                        }
                        
                    }

                    //return the new array
                    return notificationWithoutRead;

                } else{
                    return allUserNotifications;

                }

            }catch(err){
                throw err;

            }

        }

    }

}
