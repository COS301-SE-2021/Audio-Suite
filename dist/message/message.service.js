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
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("../user/user.service");
const typeorm_2 = require("typeorm");
const message_entity_1 = require("./message.entity");
let MessageService = class MessageService {
    constructor(messageRepository, userService) {
        this.messageRepository = messageRepository;
        this.userService = userService;
    }
    async saveNewMessage(jwt, officeID, textChannel, sender, message) {
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
            const newMessage = await this.messageRepository.create({ officeID, textChannel, sender, message });
            const savedMessage = await this.messageRepository.save(newMessage);
            return {
                Response: "Success",
                Message: savedMessage
            };
        }
        catch (err) {
            throw new common_1.BadRequestException("Could not add message to the database");
        }
    }
    async getTextChannelMessages(jwt, textChannel, offset) {
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
            const messageList = await this.messageRepository.find({
                where: {
                    textChannel: textChannel
                },
                order: {
                    id: "DESC"
                },
                skip: offset * 50,
                take: 50
            });
            return {
                Response: "Success",
                MessageList: messageList.reverse()
            };
        }
        catch (err) {
            throw new common_1.BadRequestException("Could not retrieve messages from the database");
        }
    }
    async deleteAllOfficeMessages(jwt, officeID) {
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
            await this.messageRepository.delete({ officeID: officeID });
        }
        catch (err) {
            throw new common_1.BadRequestException("Could not delete all office messages");
        }
    }
    async deleteTextChannelMessages(jwt, textChannel) {
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
            await this.messageRepository.delete({ textChannel: textChannel });
        }
        catch (err) {
            throw new common_1.BadRequestException("Could not delete all office messages");
        }
    }
};
MessageService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(message_entity_1.Message)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map