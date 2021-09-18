import { Repository } from 'typeorm';
import { Office } from './office.entity';
import { UserService } from '../user/user.service';
import { OfficeusersService } from '../officeusers/officeusers.service';
import { RoomService } from '../room/room.service';
export declare class OfficeService {
    private officesRepository;
    private userService;
    private officeUserService;
    private roomService;
    constructor(officesRepository: Repository<Office>, userService: UserService, officeUserService: OfficeusersService, roomService: RoomService);
    getOffice(): string;
    registerOffice(name: string, jwt: string): Promise<any>;
    getOfficeIdFromUserId(jwt: string): Promise<any>;
    getOfficeFromOfficeID(jwt: string, officeID: number): Promise<any>;
    joinUserToOffice(officeInviteLink: string, jwt: string): Promise<any>;
}
