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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomController = void 0;
const common_1 = require("@nestjs/common");
const room_service_1 = require("./room.service");
let RoomController = class RoomController {
    constructor(roomService) {
        this.roomService = roomService;
    }
    async getOfficeRoom(jwt, officeID) {
        return await this.roomService.getOfficeRooms(jwt, officeID);
    }
    async registerRoom(jwt, officeID, roomName, roomType, xCoordinate, yCoordinate, width, height) {
        return await this.roomService.registerRoom(jwt, officeID, roomName, roomType, xCoordinate, yCoordinate, width, height);
    }
    async updateRoomDetails(jwt, officeID, roomName, roomType, xCoordinate, yCoordinate, width, height) {
        return await this.roomService.updateRoomDetails(jwt, officeID, roomName, roomType, xCoordinate, yCoordinate, width, height);
    }
    async deleteRoom(jwt, officeID, roomName) {
        return await this.roomService.deleteRoom(jwt, officeID, roomName);
    }
    async joinRoom(jwt, officeID, roomID) {
        return await this.roomService.joinRoom(jwt, officeID, roomID);
    }
    async leaveRoom(jwt, officeID, roomID) {
        return await this.roomService.leaveRoom(jwt, officeID, roomID);
    }
    async findWhatRoomAUserIsIn(jwt, userID) {
        return await this.roomService.findWhatRoomAUserIsIn(jwt, userID);
    }
    async getRoomUsersByOfficeID(jwt, officeID) {
        return await this.roomService.getRoomUsersByOfficeID(jwt, officeID);
    }
};
__decorate([
    common_1.Post('room/getOfficeRooms'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "getOfficeRoom", null);
__decorate([
    common_1.Post('room/register'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __param(2, common_1.Body('roomName')),
    __param(3, common_1.Body('roomType')),
    __param(4, common_1.Body('xCoordinate')),
    __param(5, common_1.Body('yCoordinate')),
    __param(6, common_1.Body('width')),
    __param(7, common_1.Body('height')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, String, Number, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "registerRoom", null);
__decorate([
    common_1.Post('room/updateDetails'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __param(2, common_1.Body('roomName')),
    __param(3, common_1.Body('roomType')),
    __param(4, common_1.Body('xCoordinate')),
    __param(5, common_1.Body('yCoordinate')),
    __param(6, common_1.Body('width')),
    __param(7, common_1.Body('height')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, String, Number, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "updateRoomDetails", null);
__decorate([
    common_1.Post('room/delete'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __param(2, common_1.Body('roomName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "deleteRoom", null);
__decorate([
    common_1.Post('room/join'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __param(2, common_1.Body('roomID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "joinRoom", null);
__decorate([
    common_1.Post('room/leave'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __param(2, common_1.Body('roomID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "leaveRoom", null);
__decorate([
    common_1.Post('room/findUser'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('userID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "findWhatRoomAUserIsIn", null);
__decorate([
    common_1.Post('room/getRoomUsers'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], RoomController.prototype, "getRoomUsersByOfficeID", null);
RoomController = __decorate([
    common_1.Controller('api'),
    __metadata("design:paramtypes", [room_service_1.RoomService])
], RoomController);
exports.RoomController = RoomController;
//# sourceMappingURL=room.controller.js.map