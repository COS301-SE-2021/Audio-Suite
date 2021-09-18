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
exports.OfficeService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const office_entity_1 = require("./office.entity");
const user_service_1 = require("../user/user.service");
const officeusers_service_1 = require("../officeusers/officeusers.service");
const room_service_1 = require("../room/room.service");
let OfficeService = class OfficeService {
    constructor(officesRepository, userService, officeUserService, roomService) {
        this.officesRepository = officesRepository;
        this.userService = userService;
        this.officeUserService = officeUserService;
        this.roomService = roomService;
    }
    getOffice() {
        return 'Hello World, Office!';
    }
    async registerOffice(name, jwt) {
        const invite = crypto_1.randomBytes(16).toString("hex");
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
            const office = await this.officesRepository.create({ name, invite });
            const savedOffice = await this.officesRepository.save(office);
            const addUserToOffice = await this.officeUserService.addUserToOffice(user.id, name, "Manager");
            const room1 = await this.roomService.registerRoomAuth(savedOffice.id, 'Coffee Station', 'Normal', 3, 9, 3, 3);
            const room2 = await this.roomService.registerRoomAuth(savedOffice.id, 'Conference Room 1', 'Normal', 5, 1, 2, 4);
            const room3 = await this.roomService.registerRoomAuth(savedOffice.id, 'Conference Room 2', 'Normal', 5, 5, 2, 4);
            const room4 = await this.roomService.registerRoomAuth(savedOffice.id, 'Open Plan Office', 'Normal', 2, 5, 3, 4);
            return {
                Response: "Success",
                Office: savedOffice,
                Rooms: [
                    room1,
                    room2,
                    room3,
                    room4
                ]
            };
        }
        catch (err) {
            throw new common_1.HttpException("Office with this name already exists.", 400);
        }
    }
    async getOfficeIdFromUserId(jwt) {
        try {
            const user = await this.userService.validateUser(jwt);
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const user = await this.userService.validateUser(jwt);
            const officeUsers = await this.officeUserService.getOfficeIdFromUserId(user.id);
            const userOffices = [];
            for (let i = 0; i < officeUsers.length; i++) {
                const returnedOffice = await this.officesRepository.findOne({ name: officeUsers[i].officeName });
                let tempOffice = {
                    id: returnedOffice.id,
                    name: returnedOffice.name,
                    invite: returnedOffice.invite,
                    role: officeUsers[i].role
                };
                userOffices.push(tempOffice);
                if (i == officeUsers.length - 1) {
                    return {
                        Response: "Success",
                        Offices: userOffices
                    };
                }
            }
            return {
                Response: "Success",
                Offices: []
            };
        }
        catch (err) {
            throw new common_1.BadRequestException();
        }
    }
    async getOfficeFromOfficeID(jwt, officeID) {
        console.log("office??");
        console.log(officeID);
        try {
            const user = await this.userService.validateUser(jwt);
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const office = await this.officesRepository.findOne({ id: officeID });
            if (office != null) {
                return office;
            }
            else {
                throw new common_1.BadRequestException();
            }
        }
        catch (err) {
            throw new common_1.BadRequestException("Office does not exist.");
        }
    }
    async joinUserToOffice(officeInviteLink, jwt) {
        try {
            const user = await this.userService.validateUser(jwt);
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const office = await this.officesRepository.findOne({ invite: officeInviteLink });
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const user = await this.userService.validateUser(jwt);
            const office = await this.officesRepository.findOne({ invite: officeInviteLink });
            const addUserToOffice = await this.officeUserService.addUserToOffice(user.id, office.name, "Unassigned");
            return {
                Response: "Success",
                Message: "User added to office"
            };
        }
        catch (err) {
            throw new common_1.BadRequestException("Unable to add user to office");
        }
    }
};
OfficeService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(office_entity_1.Office)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService,
        officeusers_service_1.OfficeusersService,
        room_service_1.RoomService])
], OfficeService);
exports.OfficeService = OfficeService;
//# sourceMappingURL=office.service.js.map