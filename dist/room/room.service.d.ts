import { RoomUsersService } from '../roomusers/roomusers.service';
import { UserService } from '../user/user.service';
import { Repository } from 'typeorm';
import { Room } from './room.entity';
export declare class RoomService {
    private roomRepository;
    private userService;
    private roomUserService;
    private logger;
    constructor(roomRepository: Repository<Room>, userService: UserService, roomUserService: RoomUsersService);
    getOfficeRooms(jwt: string, officeID: number): Promise<any>;
    registerRoomAuth(officeID: number, roomName: string, roomType: string, xCoordinate: number, yCoordinate: number, width: number, height: number): Promise<any>;
    registerRoom(jwt: string, officeID: number, roomName: string, roomType: string, xCoordinate: number, yCoordinate: number, width: number, height: number): Promise<any>;
    updateRoomDetails(jwt: string, officeID: number, roomName: string, roomType: string, xCoordinate: number, yCoordinate: number, width: number, height: number): Promise<any>;
    deleteRoom(jwt: string, officeID: number, roomName: string): Promise<any>;
    joinRoom(jwt: string, officeID: number, roomId: number): Promise<any>;
    leaveRoom(jwt: string, officeID: number, roomId: number): Promise<any>;
    findWhatRoomAUserIsIn(jwt: string, userID: number): Promise<any>;
    addUserToRoomUsersFromRoomName(jwt: string, officeID: number, roomName: string): Promise<any>;
    removeUserFromRoomUsersFromRoomName(jwt: string, officeID: number, roomName: string): Promise<any>;
    removeUserFromAllRooms(jwt: string): Promise<any>;
    getRoomUsersByOfficeID(jwt: string, officeID: number): Promise<any>;
}
