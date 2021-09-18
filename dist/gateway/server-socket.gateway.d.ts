import { OnGatewayDisconnect, OnGatewayInit } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { MessageService } from '../message/message.service';
import { RoomService } from '../room/room.service';
export declare class ServerSocketGateway implements OnGatewayInit, OnGatewayDisconnect {
    private messageService;
    private roomService;
    private logger;
    private clientList;
    wss: Server;
    constructor(messageService: MessageService, roomService: RoomService);
    afterInit(server: any): void;
    handleDisconnect(client: any): Promise<void>;
    handleMessage(client: Socket, message: {
        jwt: string;
        officeID: number;
        sender: string;
        channel: string;
        message: string;
    }): Promise<void>;
    handleRoomJoinText(client: Socket, data: {
        jwt: string;
        officeID: number;
        office: string;
        channel: string;
        isRoom: boolean;
    }): Promise<void>;
    handleRoomLeaveText(client: Socket, data: {
        jwt: string;
        officeID: number;
        office: string;
        channel: string;
    }): Promise<void>;
    handleRoomJoinAudio(client: Socket, data: {
        userID: string;
        room: string;
    }): void;
    handleRoomLeaveAudio(client: Socket, data: {
        userID: string;
        room: string;
    }): void;
}
