import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { Message } from './message.entity';

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(Message)
        private messageRepository: Repository<Message>,
        private userService: UserService,
    ){}

    async saveNewMessage(jwt: string, officeID: number, textChannel: string, sender: string, message: string): Promise<any>{
        try{
            const user = await this.userService.validateUser(jwt);
            if(user == null){
                throw new UnauthorizedException();
            }
        }catch(err){
            throw new UnauthorizedException();
        }

        try{
            const newMessage = await this.messageRepository.create({officeID, textChannel, sender, message});
            const savedMessage = await this.messageRepository.save(newMessage);

            return {
                Response: "Success",
                Message: savedMessage
            }
        }
        catch(err) {
            throw new BadRequestException("Could not add message to the database")
        }
    }

    async getTextChannelMessages(jwt: string, textChannel: string, offset: number): Promise<any>{
        try{
            const user = await this.userService.validateUser(jwt);
            if(user == null){
                throw new UnauthorizedException();
            }
        }catch(err){
            throw new UnauthorizedException();
        }

        try{
            const messageList = await this.messageRepository.find({
                where: {
                    textChannel: textChannel
                },
                order: {
                    id: "DESC"
                },
                skip: offset*20,
                take: 20
            });

            return {
                Response: "Success",
                MessageList: messageList.reverse()
            }
        }
        catch(err) {
            throw new BadRequestException("Could not retrieve messages from the database")
        }
    }

    async deleteAllOfficeMessages(jwt: string, officeID: number): Promise<any>{
        try{
            const user = await this.userService.validateUser(jwt);
            if(user == null){
                throw new UnauthorizedException();
            }
        }catch(err){
            throw new UnauthorizedException();
        }

        try{
            await this.messageRepository.delete({officeID: officeID});
        }
        catch(err){
            throw new BadRequestException("Could not delete all office messages")
        }
    }

    async deleteTextChannelMessages(jwt: string, textChannel: string): Promise<any>{
        try{
            const user = await this.userService.validateUser(jwt);
            if(user == null){
                throw new UnauthorizedException();
            }
        }catch(err){
            throw new UnauthorizedException();
        }

        try{
            await this.messageRepository.delete({textChannel: textChannel});
        }
        catch(err){
            throw new BadRequestException("Could not delete all office messages")
        }
    }
}
