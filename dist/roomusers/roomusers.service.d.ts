import { Repository } from 'typeorm';
import { RoomUsers } from './roomusers.entity';
export declare class RoomUsersService {
    private roomUsersRepository;
    constructor(roomUsersRepository: Repository<RoomUsers>);
    addUserToRoom(officeID: number, roomID: number, roomName: string, userID: number, userName: string): Promise<any>;
    removeUserFromRoom(officeID: number, roomID: number, roomName: string, userID: number, userName: string): Promise<any>;
    getRoomUserByRoomID(roomID: number): Promise<any>;
    removeUserFromAllRooms(userID: number): Promise<any>;
    findWhatRoomAUserIsIn(userID: number): Promise<any>;
}
