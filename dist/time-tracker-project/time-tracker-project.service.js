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
exports.TimeTrackerProjectService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("../user/user.service");
const typeorm_2 = require("typeorm");
const time_tracker_project_entity_1 = require("./time-tracker-project.entity");
let TimeTrackerProjectService = class TimeTrackerProjectService {
    constructor(timeTrackerProjectRepository, userService) {
        this.timeTrackerProjectRepository = timeTrackerProjectRepository;
        this.userService = userService;
    }
    async registerNewProject(jwt, officeID, projectName) {
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
            const projects = await this.timeTrackerProjectRepository.find({ officeID, project: projectName });
            if (projects.length > 0) {
                throw new common_1.BadRequestException('Project already exists in current office.');
            }
        }
        catch (err) {
            throw new common_1.BadRequestException('Project already exists in current office.');
        }
        try {
            const newProject = await this.timeTrackerProjectRepository.create({ officeID, project: projectName });
            const savedProject = await this.timeTrackerProjectRepository.save(newProject);
            return {
                Response: "Success",
                Project: savedProject
            };
        }
        catch (err) {
            throw new common_1.BadRequestException(err);
        }
    }
    async removeProjectByID(jwt, id) {
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
            const project = await this.timeTrackerProjectRepository.findOneOrFail({ id });
            const deletedProject = await this.timeTrackerProjectRepository.remove(project);
            return {
                Response: "Success",
                DeletedProject: deletedProject
            };
        }
        catch (err) {
            throw new common_1.BadRequestException('Could not find a project with the given id.');
        }
    }
    async removeProjectByName(jwt, officeID, projectName) {
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
            const project = await this.timeTrackerProjectRepository.findOneOrFail({ officeID, project: projectName });
            const deletedProject = await this.timeTrackerProjectRepository.remove(project);
            return {
                Response: "Success",
                DeletedProject: deletedProject
            };
        }
        catch (err) {
            throw new common_1.BadRequestException('Could not find a project with the given name in the given office.');
        }
    }
    async getAllOfficeProject(jwt, officeID) {
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
            const projects = await this.timeTrackerProjectRepository.find({ officeID });
            return {
                Response: "Success",
                Projects: projects
            };
        }
        catch (err) {
            throw new common_1.BadRequestException('Could not find any projects with the officeID');
        }
    }
};
TimeTrackerProjectService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(time_tracker_project_entity_1.TimeTrackerProject)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], TimeTrackerProjectService);
exports.TimeTrackerProjectService = TimeTrackerProjectService;
//# sourceMappingURL=time-tracker-project.service.js.map