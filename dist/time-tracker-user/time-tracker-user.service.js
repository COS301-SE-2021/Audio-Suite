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
exports.TimeTrackerUserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("../user/user.service");
const typeorm_2 = require("typeorm");
const time_tracker_user_entity_1 = require("./time-tracker-user.entity");
let TimeTrackerUserService = class TimeTrackerUserService {
    constructor(timetrackerUserRepository, userService) {
        this.timetrackerUserRepository = timetrackerUserRepository;
        this.userService = userService;
    }
    async addNewTimeTrackingInstance(jwt, officeID, description, projectID, tagID, startTime, endTime) {
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
            const newTrackingInstance = await this.timetrackerUserRepository.create({
                userID: user.id,
                officeID,
                description,
                projectID,
                tagID,
                startTime,
                endTime
            });
            const savedTrackingInstance = await this.timetrackerUserRepository.save(newTrackingInstance);
            return {
                Response: "Success",
                TrackingInstance: savedTrackingInstance
            };
        }
        catch (err) {
            throw new common_1.BadRequestException('Could not add time tracking instance to repository');
        }
    }
    async getAllUserOfficeTrackingInstances(jwt, officeID) {
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
            const userOfficeTrackingInstances = await this.timetrackerUserRepository.find({
                userID: user.id,
                officeID
            });
            return {
                Response: "Success",
                TrackingInstances: userOfficeTrackingInstances
            };
        }
        catch (err) {
            throw new common_1.BadRequestException('Could not return all users ');
        }
    }
};
TimeTrackerUserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(time_tracker_user_entity_1.TimeTrackerUser)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], TimeTrackerUserService);
exports.TimeTrackerUserService = TimeTrackerUserService;
//# sourceMappingURL=time-tracker-user.service.js.map