import { Body, Controller, Post } from '@nestjs/common';
import { RoomService } from './room.service';

@Controller('api')
export class RoomController {
    constructor(private readonly roomService: RoomService){}

    @Post('room/getOfficeRooms')
    async getOfficeRoom(
        @Body('jwt') jwt: string,
        @Body('officeID') officeID: number
    )
    {
        return await this.roomService.getOfficeRooms(jwt, officeID);
    }

    //create room
    @Post('room/register')
    async registerRoom(
        @Body('jwt') jwt: string,
        @Body('officeID') officeID: number,
        @Body('roomName') roomName: string, 
        @Body('roomType') roomType: string,
        @Body('xCoordinate') xCoordinate: number,
        @Body('yCoordinate') yCoordinate: number,
        @Body('width') width: number,
        @Body('height') height: number,
    )
    {
        return await this.roomService.registerRoom(jwt, officeID, roomName, roomType, xCoordinate, yCoordinate, width, height);
    }

    @Post('room/updateDetails')
    async updateRoomDetails(
        @Body('jwt') jwt: string,
        @Body('officeID') officeID: number,
        @Body('roomName') roomName: string, 
        @Body('roomType') roomType: string,
        @Body('xCoordinate') xCoordinate: number,
        @Body('yCoordinate') yCoordinate: number,
        @Body('width') width: number,
        @Body('height') height: number,
    )
    {
        return await this.roomService.updateRoomDetails(jwt, officeID, roomName, roomType, xCoordinate, yCoordinate, width, height);
    }

    @Post('room/delete')
    async deleteRoom(
        @Body('jwt') jwt: string,
        @Body('officeID') officeID: number,
        @Body('roomName') roomName: string,
    )
    {
        return await this.roomService.deleteRoom(jwt, officeID, roomName);
    }

    //join room
    @Post('room/join')
    async joinRoom(
        @Body('jwt') jwt: string,
        @Body('officeID') officeID: number,
        @Body('roomID') roomID: number, 
    )
    {
        return await this.roomService.joinRoom(jwt, officeID, roomID)
    }

    //leave room
    @Post('room/leave')
    async leaveRoom(
        @Body('jwt') jwt: string,
        @Body('officeID') officeID: number,
        @Body('roomID') roomID: number, 
    )
    {
        return await this.roomService.leaveRoom(jwt, officeID, roomID)
    }

    //find what room a user is in
    @Post('room/findUser')
    async findWhatRoomAUserIsIn(
        @Body('jwt') jwt: string,
        @Body('userID') userID: number,
    )
    {
        return await this.roomService.findWhatRoomAUserIsIn(jwt, userID);
    }

    //Returns all the room users for a given office
    @Post('room/getRoomUsers')
    async getRoomUsersByOfficeID(
        @Body('jwt') jwt: string,
        @Body('officeID') officeID: number,
    )
    {
        return await this.roomService.getRoomUsersByOfficeID(jwt, officeID);
    }
}
