"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerSocketGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const common_1 = require("@nestjs/common");
const message_service_1 = require("../message/message.service");
const room_service_1 = require("../room/room.service");
let ServerSocketGateway = class ServerSocketGateway {
    constructor(messageService, roomService) {
        this.messageService = messageService;
        this.roomService = roomService;
        this.logger = new common_1.Logger('ServerSocketGateway');
        this.clientList = [];
    }
    afterInit(server) {
        this.logger.log('Initialised!');
    }
    async handleDisconnect(client) {
        var index = this.clientList.findIndex(item => {
            return item.client.id == client.id;
        });
        if (index > -1) {
            var tmpOffice = this.clientList[index].office;
            await this.roomService.removeUserFromAllRooms(this.clientList[index].jwt);
            this.clientList.splice(index, 1);
            this.wss.to(tmpOffice).emit('updateRoomAttendance', "Update Room User List");
            this.logger.log('Clean up before disconnecting');
        }
        this.logger.log('Client: ' + client.id + ' disconnected');
    }
    async handleMessage(client, message) {
        this.wss.to(message.channel).emit('msgToClient', message);
        await this.messageService.saveNewMessage(message.jwt, message.officeID, message.channel, message.sender, message.message);
    }
    async handleRoomJoinText(client, data) {
        client.join(data.channel);
        this.logger.log(client.id + ' joined the ' + data.channel + '.');
        const messageList = await this.messageService.getTextChannelMessages(data.jwt, data.channel, 0);
        client.emit('joinedRoomText', {
            Room: data.channel,
            MessageList: messageList.MessageList
        });
        if (data.isRoom) {
            var newClient = {
                client: client,
                jwt: data.jwt,
                office: data.office,
                roomName: data.channel
            };
            this.clientList.push(newClient);
            await this.roomService.addUserToRoomUsersFromRoomName(data.jwt, data.officeID, data.channel);
            this.wss.to(data.office).emit('updateRoomAttendance', "Update Room User List");
        }
    }
    async handleRoomLeaveText(client, data) {
        client.leave(data.channel);
        this.logger.log(client.id + ' left the ' + data.channel + '.');
        client.emit('leftRoomText', data.channel);
        var index = this.clientList.findIndex(item => {
            return item.client.id == client.id;
        });
        if (index > -1) {
            this.clientList.splice(index, 1);
        }
        await this.roomService.removeUserFromRoomUsersFromRoomName(data.jwt, data.officeID, data.channel);
        this.wss.to(data.office).emit('updateRoomAttendance', "Update Room User List");
    }
    handleRoomJoinAudio(client, data) {
        client.join(data.room);
        this.logger.log(client.id + ' joined the Audio channel' + data.room + '.');
        this.wss.to(data.room).emit('joinedRoomAudio', data);
    }
    handleRoomLeaveAudio(client, data) {
        client.leave(data.room);
        this.logger.log(client.id + ' left the Audio channel' + data.room + '.');
        this.wss.to(data.room).emit('leftRoomAudio', data);
    }
};
__decorate([
    websockets_1.WebSocketServer(),
    __metadata("design:type", socket_io_1.Server)
], ServerSocketGateway.prototype, "wss", void 0);
__decorate([
    websockets_1.SubscribeMessage('msgToServer'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], ServerSocketGateway.prototype, "handleMessage", null);
__decorate([
    websockets_1.SubscribeMessage('joinRoomText'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], ServerSocketGateway.prototype, "handleRoomJoinText", null);
__decorate([
    websockets_1.SubscribeMessage('leaveRoomText'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", Promise)
], ServerSocketGateway.prototype, "handleRoomLeaveText", null);
__decorate([
    websockets_1.SubscribeMessage('joinRoomAudio'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], ServerSocketGateway.prototype, "handleRoomJoinAudio", null);
__decorate([
    websockets_1.SubscribeMessage('leaveRoomAudio'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket, Object]),
    __metadata("design:returntype", void 0)
], ServerSocketGateway.prototype, "handleRoomLeaveAudio", null);
ServerSocketGateway = __decorate([
    websockets_1.WebSocketGateway({ cors: true, namespace: 'serversocket' }),
    __metadata("design:paramtypes", [message_service_1.MessageService,
        room_service_1.RoomService])
], ServerSocketGateway);
exports.ServerSocketGateway = ServerSocketGateway;
//# sourceMappingURL=server-socket.gateway.js.map