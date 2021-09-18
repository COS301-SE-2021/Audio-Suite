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
exports.TimeTrackerUserController = void 0;
const common_1 = require("@nestjs/common");
const time_tracker_user_service_1 = require("./time-tracker-user.service");
let TimeTrackerUserController = class TimeTrackerUserController {
    constructor(timeTrackerUserService) {
        this.timeTrackerUserService = timeTrackerUserService;
    }
    async registerTrackingInstance(jwt, officeID, description, projectID, tagID, startTime, endTime) {
        return await this.timeTrackerUserService.addNewTimeTrackingInstance(jwt, officeID, description, projectID, tagID, startTime, endTime);
    }
    async getTrackingInstances(jwt, officeID) {
        return await this.timeTrackerUserService.getAllUserOfficeTrackingInstances(jwt, officeID);
    }
};
__decorate([
    common_1.Post('registerTrackingInstance'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __param(2, common_1.Body('description')),
    __param(3, common_1.Body('projectID')),
    __param(4, common_1.Body('tagID')),
    __param(5, common_1.Body('startTime')),
    __param(6, common_1.Body('endTime')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], TimeTrackerUserController.prototype, "registerTrackingInstance", null);
__decorate([
    common_1.Post('getTrackingInstances'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], TimeTrackerUserController.prototype, "getTrackingInstances", null);
TimeTrackerUserController = __decorate([
    common_1.Controller('api/time-tracker/user'),
    __metadata("design:paramtypes", [time_tracker_user_service_1.TimeTrackerUserService])
], TimeTrackerUserController);
exports.TimeTrackerUserController = TimeTrackerUserController;
//# sourceMappingURL=time-tracker-user.controller.js.map