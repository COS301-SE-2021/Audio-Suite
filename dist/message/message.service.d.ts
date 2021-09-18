import { UserService } from '../user/user.service';
import { Repository } from 'typeorm';
import { Message } from './message.entity';
export declare class MessageService {
    private messageRepository;
    private userService;
    constructor(messageRepository: Repository<Message>, userService: UserService);
    saveNewMessage(jwt: string, officeID: number, textChannel: string, sender: string, message: string): Promise<any>;
    getTextChannelMessages(jwt: string, textChannel: string, offset: number): Promise<any>;
    deleteAllOfficeMessages(jwt: string, officeID: number): Promise<any>;
    deleteTextChannelMessages(jwt: string, textChannel: string): Promise<any>;
}
