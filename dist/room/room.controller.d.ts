import { RoomService } from './room.service';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    getOfficeRoom(jwt: string, officeID: number): Promise<any>;
    registerRoom(jwt: string, officeID: number, roomName: string, roomType: string, xCoordinate: number, yCoordinate: number, width: number, height: number): Promise<any>;
    updateRoomDetails(jwt: string, officeID: number, roomName: string, roomType: string, xCoordinate: number, yCoordinate: number, width: number, height: number): Promise<any>;
    deleteRoom(jwt: string, officeID: number, roomName: string): Promise<any>;
    joinRoom(jwt: string, officeID: number, roomID: number): Promise<any>;
    leaveRoom(jwt: string, officeID: number, roomID: number): Promise<any>;
    findWhatRoomAUserIsIn(jwt: string, userID: number): Promise<any>;
    getRoomUsersByOfficeID(jwt: string, officeID: number): Promise<any>;
}
