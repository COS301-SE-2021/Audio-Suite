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
exports.RoomUsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const roomusers_entity_1 = require("./roomusers.entity");
let RoomUsersService = class RoomUsersService {
    constructor(roomUsersRepository) {
        this.roomUsersRepository = roomUsersRepository;
    }
    async addUserToRoom(officeID, roomID, roomName, userID, userName) {
        try {
            const roomUser = await this.roomUsersRepository.create({ officeID, roomID, roomName, userID, userName });
            const savedRoomUser = await this.roomUsersRepository.save(roomUser);
            return {
                Response: "Success",
                RoomUser: savedRoomUser
            };
        }
        catch (err) {
            throw new common_1.HttpException("Could not add user to room.", 400);
        }
    }
    async removeUserFromRoom(officeID, roomID, roomName, userID, userName) {
        try {
            const roomUser = await this.roomUsersRepository.findOne({ officeID, roomID, roomName, userID, userName });
            const removedRoomUser = await this.roomUsersRepository.remove(roomUser);
            return {
                Response: "Success",
                RemovedRoomUser: removedRoomUser
            };
        }
        catch (err) {
            throw new common_1.HttpException("Could not remove user from room.", 400);
        }
    }
    async getRoomUserByRoomID(roomID) {
        return await this.roomUsersRepository.find({ roomID });
    }
    async removeUserFromAllRooms(userID) {
        try {
            const removedRoomUsers = await this.roomUsersRepository.delete({ userID });
            return {
                Response: "Success",
                RoomUsersList: removedRoomUsers
            };
        }
        catch (err) {
            throw new common_1.BadRequestException("Could not remove records with the given user ID.");
        }
    }
    async findWhatRoomAUserIsIn(userID) {
        try {
            const roomUser = await this.roomUsersRepository.findOne({ userID: userID });
            if (roomUser !== null) {
                return {
                    Response: "Success",
                    UserID: userID,
                    RoomID: roomUser.roomID
                };
            }
        }
        catch (err) {
            return {
                Response: "Unsuccessful",
                Message: "Could not find a room with that user in it."
            };
        }
    }
};
RoomUsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(roomusers_entity_1.RoomUsers)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RoomUsersService);
exports.RoomUsersService = RoomUsersService;
//# sourceMappingURL=roomusers.service.js.map