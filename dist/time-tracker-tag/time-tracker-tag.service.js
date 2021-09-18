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
exports.TimeTrackerTagService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("../user/user.service");
const typeorm_2 = require("typeorm");
const time_tracker_tag_entity_1 = require("./time-tracker-tag.entity");
let TimeTrackerTagService = class TimeTrackerTagService {
    constructor(timeTrackerTagRepository, userService) {
        this.timeTrackerTagRepository = timeTrackerTagRepository;
        this.userService = userService;
    }
    async registerNewTag(jwt, officeID, tag) {
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
            const tags = await this.timeTrackerTagRepository.find({ officeID, tag });
            if (tags.length > 0) {
                throw new common_1.BadRequestException('Tag already exists in current office.');
            }
        }
        catch (err) {
            throw new common_1.BadRequestException('Tag already exists in current office.');
        }
        try {
            const newTag = await this.timeTrackerTagRepository.create({ officeID, tag });
            const savedTag = await this.timeTrackerTagRepository.save(newTag);
            return {
                Response: "Success",
                Tag: savedTag
            };
        }
        catch (err) {
            throw new common_1.BadRequestException('Unable to save Tag');
        }
    }
    async removeTag(jwt, officeID, tag) {
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
            const existingTag = await this.timeTrackerTagRepository.findOneOrFail({ officeID, tag });
            const deletedTag = await this.timeTrackerTagRepository.remove(existingTag);
            return {
                Response: "Success",
                DeletedTag: deletedTag
            };
        }
        catch (err) {
            throw new common_1.BadRequestException('Could not find a tag with the given name in the given office.');
        }
    }
    async getAllOfficeTags(jwt, officeID) {
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
            const tags = await this.timeTrackerTagRepository.find({ officeID });
            return {
                Response: "Success",
                Tags: tags
            };
        }
        catch (err) {
            throw new common_1.BadRequestException('Could not find any tags with the officeID');
        }
    }
};
TimeTrackerTagService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(time_tracker_tag_entity_1.TimeTrackerTag)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], TimeTrackerTagService);
exports.TimeTrackerTagService = TimeTrackerTagService;
//# sourceMappingURL=time-tracker-tag.service.js.map