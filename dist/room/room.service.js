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
exports.RoomService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const roomusers_service_1 = require("../roomusers/roomusers.service");
const user_service_1 = require("../user/user.service");
const typeorm_2 = require("typeorm");
const room_entity_1 = require("./room.entity");
const roomusers_entity_1 = require("../roomusers/roomusers.entity");
let RoomService = class RoomService {
    constructor(roomRepository, userService, roomUserService) {
        this.roomRepository = roomRepository;
        this.userService = userService;
        this.roomUserService = roomUserService;
        this.logger = new common_1.Logger('RoomService');
        this.logger.log("Initialised");
    }
    async getOfficeRooms(jwt, officeID) {
        try {
            const user = await this.userService.validateUser(jwt);
            if (user == null) {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
        return {
            Response: "Success",
            Rooms: await this.roomRepository.find({ officeID: officeID })
        };
    }
    async registerRoomAuth(officeID, roomName, roomType, xCoordinate, yCoordinate, width, height) {
        try {
            const roomExists = await this.roomRepository.find({ officeID, roomName });
            if (roomExists.length > 0) {
                throw new common_1.BadRequestException("Room already exists in this office.");
            }
        }
        catch (err) {
            throw new common_1.BadRequestException("Room already exists in this office.");
        }
        try {
            const room = await this.roomRepository.create({ officeID, roomName, roomType, xCoordinate, yCoordinate, width, height });
            const savedRoom = await this.roomRepository.save(room);
            return {
                Response: "Success",
                Room: savedRoom
            };
        }
        catch (err) {
            throw new common_1.BadRequestException();
        }
    }
    async registerRoom(jwt, officeID, roomName, roomType, xCoordinate, yCoordinate, width, height) {
        try {
            const user = await this.userService.validateUser(jwt);
            if (user == null) {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const roomExists = await this.roomRepository.find({ officeID, roomName });
            if (roomExists.length > 0) {
                throw new common_1.BadRequestException("Room already exists in this office.");
            }
        }
        catch (err) {
            throw new common_1.BadRequestException("Room already exists in this office.");
        }
        try {
            const room = await this.roomRepository.create({ officeID, roomName, roomType, xCoordinate, yCoordinate, width, height });
            const savedRoom = await this.roomRepository.save(room);
            return {
                Response: "Success",
                Room: savedRoom
            };
        }
        catch (err) {
            throw new common_1.BadRequestException();
        }
    }
    async updateRoomDetails(jwt, officeID, roomName, roomType, xCoordinate, yCoordinate, width, height) {
        try {
            const user = await this.userService.validateUser(jwt);
            if (user == null) {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const oldRoom = await this.roomRepository.findOne({ officeID, roomName });
            var id = oldRoom.id;
            const newRoom = await this.roomRepository.create({ id, officeID, roomName, roomType, xCoordinate, yCoordinate, width, height });
            const savedRoom = await this.roomRepository.save(newRoom);
            this.logger.log("Updating Room with ID: " + id);
            return {
                Response: "Success",
                UpdatedRoom: savedRoom
            };
        }
        catch (err) {
            throw new common_1.BadRequestException(err.message);
        }
    }
    async deleteRoom(jwt, officeID, roomName) {
        try {
            const user = await this.userService.validateUser(jwt);
            if (user == null) {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const room = await this.roomRepository.findOne({ officeID, roomName });
            const id = room.id;
            const deletedRoom = await this.roomRepository.delete({ id });
            return {
                Response: "Success",
                DeletedRoom: deletedRoom,
                Rooms: await this.roomRepository.find({ officeID: officeID })
            };
        }
        catch (err) {
            throw new common_1.BadRequestException(err.message);
        }
    }
    async joinRoom(jwt, officeID, roomId) {
        try {
            const user = await this.userService.validateUser(jwt);
            if (user == null) {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const room = await this.roomRepository.findOne({ id: roomId });
        }
        catch (err) {
            throw new common_1.HttpException("No room with the supplied ID exists.", 400);
        }
        const user = await this.userService.validateUser(jwt);
        const room = await this.roomRepository.findOne({ id: roomId });
        return await this.roomUserService.addUserToRoom(officeID, roomId, room.roomName, user.id, user.userName);
    }
    async leaveRoom(jwt, officeID, roomId) {
        try {
            const user = await this.userService.validateUser(jwt);
            if (user == null) {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const room = await this.roomRepository.findOne({ id: roomId });
        }
        catch (err) {
            throw new common_1.HttpException("No room with the supplied ID exists.", 400);
        }
        const user = await this.userService.validateUser(jwt);
        const room = await this.roomRepository.findOne({ id: roomId });
        return await this.roomUserService.removeUserFromRoom(officeID, roomId, room.roomName, user.id, user.userName);
    }
    async findWhatRoomAUserIsIn(jwt, userID) {
        try {
            const user = await this.userService.validateUser(jwt);
            if (user == null) {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
        return await this.roomUserService.findWhatRoomAUserIsIn(userID);
    }
    async addUserToRoomUsersFromRoomName(jwt, officeID, roomName) {
        try {
            const user = await this.userService.validateUser(jwt);
            if (user == null) {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
        try {
            await this.roomRepository.findOneOrFail({ officeID, roomName });
        }
        catch (err) {
            return {
                Response: "Unsuccessfull",
                Message: "No room exits with the name: " + roomName
            };
        }
        try {
            const user = await this.userService.validateUser(jwt);
            const room = await this.roomRepository.findOne({ officeID, roomName });
            const savedInRoomUsers = await this.roomUserService.addUserToRoom(officeID, room.id, roomName, user.id, user.userName);
            return {
                Response: "Success",
                RoomUser: savedInRoomUsers
            };
        }
        catch (err) {
            throw new common_1.BadRequestException("Could not add user to RoomUsers Database");
        }
    }
    async removeUserFromRoomUsersFromRoomName(jwt, officeID, roomName) {
        try {
            const user = await this.userService.validateUser(jwt);
            if (user == null) {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
        try {
            await this.roomRepository.findOneOrFail({ officeID, roomName });
        }
        catch (err) {
            return {
                Response: "Unsuccessfull",
                Message: "No room exits with the name: " + roomName
            };
        }
        try {
            const user = await this.userService.validateUser(jwt);
            const room = await this.roomRepository.findOne({ officeID, roomName });
            const removedInRoomUsers = await this.roomUserService.removeUserFromRoom(officeID, room.id, roomName, user.id, user.userName);
            return {
                Response: "Success",
                RoomUser: removedInRoomUsers
            };
        }
        catch (err) {
            throw new common_1.BadRequestException("Could not remove user to RoomUsers Database");
        }
    }
    async removeUserFromAllRooms(jwt) {
        try {
            const user = await this.userService.validateUser(jwt);
            if (user == null) {
                throw new common_1.UnauthorizedException();
            }
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const user = await this.userService.validateUser(jwt);
            return await this.roomUserService.removeUserFromAllRooms(user.id);
        }
        catch (err) {
            throw new common_1.BadRequestException("Could not remove records with the given user ID.");
        }
    }
    async getRoomUsersByOfficeID(jwt, officeID) {
        try {
            const user = await this.userService.validateUser(jwt);
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
        let roomUserList = [];
        try {
            const rooms = await this.roomRepository.find({ officeID: officeID });
            for (var i = 0; i < rooms.length; i++) {
                let newRoomUserItem = {
                    Room: rooms[i].roomName,
                    RoomUsers: await this.roomUserService.getRoomUserByRoomID(rooms[i].id)
                };
                roomUserList.push(newRoomUserItem);
                if (i == rooms.length - 1) {
                    return {
                        Response: "Success",
                        RoomUserList: roomUserList
                    };
                }
            }
        }
        catch (err) {
            throw new common_1.BadRequestException("Could not find records with the given office ID.");
        }
    }
};
RoomService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(room_entity_1.Room)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService,
        roomusers_service_1.RoomUsersService])
], RoomService);
exports.RoomService = RoomService;
//# sourceMappingURL=room.service.js.map