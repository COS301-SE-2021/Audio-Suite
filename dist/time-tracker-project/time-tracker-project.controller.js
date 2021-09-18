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
exports.TimeTrackerProjectController = void 0;
const common_1 = require("@nestjs/common");
const time_tracker_project_service_1 = require("./time-tracker-project.service");
let TimeTrackerProjectController = class TimeTrackerProjectController {
    constructor(timeTrackerProjectService) {
        this.timeTrackerProjectService = timeTrackerProjectService;
    }
    async registerProject(jwt, officeID, projectName) {
        return await this.timeTrackerProjectService.registerNewProject(jwt, officeID, projectName);
    }
    async removeProjectByID(jwt, id) {
        return await this.timeTrackerProjectService.removeProjectByID(jwt, id);
    }
    async removeProjectByName(jwt, officeID, projectName) {
        return await this.timeTrackerProjectService.removeProjectByName(jwt, officeID, projectName);
    }
    async getAllOfficeProjects(jwt, officeID) {
        return await this.timeTrackerProjectService.getAllOfficeProject(jwt, officeID);
    }
};
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __param(2, common_1.Body('projectName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], TimeTrackerProjectController.prototype, "registerProject", null);
__decorate([
    common_1.Post('removeByID'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], TimeTrackerProjectController.prototype, "removeProjectByID", null);
__decorate([
    common_1.Post('removeByName'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __param(2, common_1.Body('projectName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], TimeTrackerProjectController.prototype, "removeProjectByName", null);
__decorate([
    common_1.Post('getOfficeProjects'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], TimeTrackerProjectController.prototype, "getAllOfficeProjects", null);
TimeTrackerProjectController = __decorate([
    common_1.Controller('api/time-tracker/project'),
    __metadata("design:paramtypes", [time_tracker_project_service_1.TimeTrackerProjectService])
], TimeTrackerProjectController);
exports.TimeTrackerProjectController = TimeTrackerProjectController;
//# sourceMappingURL=time-tracker-project.controller.js.map