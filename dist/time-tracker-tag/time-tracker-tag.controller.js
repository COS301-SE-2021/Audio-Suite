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
exports.TimeTrackerTagController = void 0;
const common_1 = require("@nestjs/common");
const time_tracker_tag_service_1 = require("./time-tracker-tag.service");
let TimeTrackerTagController = class TimeTrackerTagController {
    constructor(timeTrackerTagService) {
        this.timeTrackerTagService = timeTrackerTagService;
    }
    async registerProject(jwt, officeID, tagName) {
        return await this.timeTrackerTagService.registerNewTag(jwt, officeID, tagName);
    }
    async removeProject(jwt, officeID, tagName) {
        return await this.timeTrackerTagService.removeTag(jwt, officeID, tagName);
    }
    async getOfficeTags(jwt, officeID) {
        return await this.timeTrackerTagService.getAllOfficeTags(jwt, officeID);
    }
};
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __param(2, common_1.Body('tagName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], TimeTrackerTagController.prototype, "registerProject", null);
__decorate([
    common_1.Post('remove'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __param(2, common_1.Body('tagName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], TimeTrackerTagController.prototype, "removeProject", null);
__decorate([
    common_1.Post('getOfficeTags'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], TimeTrackerTagController.prototype, "getOfficeTags", null);
TimeTrackerTagController = __decorate([
    common_1.Controller('api/time-tracker/tag'),
    __metadata("design:paramtypes", [time_tracker_tag_service_1.TimeTrackerTagService])
], TimeTrackerTagController);
exports.TimeTrackerTagController = TimeTrackerTagController;
//# sourceMappingURL=time-tracker-tag.controller.js.map