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
    )
    {
        return await this.roomService.registerRoom(jwt, officeID, roomName);
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

    //join room
    @Post('room/leave')
    async leaveRoom(
        @Body('jwt') jwt: string,
        @Body('officeID') officeID: number,
        @Body('roomID') roomID: number, 
    )
    {
        return await this.roomService.leaveRoom(jwt, officeID, roomID)
    }
}
