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
exports.NotificationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_service_1 = require("../user/user.service");
const typeorm_2 = require("typeorm");
const notification_entity_1 = require("./notification.entity");
const mail_service_1 = require("../mail/mail.service");
let NotificationService = class NotificationService {
    constructor(notificationRepository, userService, mailerService) {
        this.notificationRepository = notificationRepository;
        this.userService = userService;
        this.mailerService = mailerService;
    }
    async getNotification() {
        return this.notificationRepository.find();
    }
    async createNotification(userID, type, invite, userName, emailAddress, password) {
        if (password === "test") {
            if (type === "OfficeInvite") {
                try {
                    const payload = await this.createType(type);
                    const notificationType = await this.getNotificationType(type);
                    const addNotification = this.addNotification(payload, userID, new Date(), notificationType);
                    return this.sendInviteCodeEmail(emailAddress, type, invite);
                }
                catch (err) {
                    throw new common_1.HttpException("Could not add notification to database", 500);
                }
            }
            else if (type === "OTP") {
                try {
                    const payload = await this.createType(type);
                    const notificationType = await this.getNotificationType(type);
                    const addNotification = this.addNotification(payload, "-1", new Date(), notificationType);
                    return this.createOTP(emailAddress, userName);
                }
                catch (err) {
                    throw new common_1.HttpException("Could not add notification to database", 500);
                }
            }
        }
        else {
            throw new common_1.UnauthorizedException;
        }
    }
    createType(type) {
        return type;
    }
    getNotificationType(type) {
        return type;
    }
    addNotification(payload, userID, createdDateTime, notificationType) {
        const readDateTime = false;
        const notification = this.notificationRepository.create({ payload, userID, readDateTime, createdDateTime, notificationType });
        const addNotification = this.notificationRepository.save(notification);
        return addNotification;
    }
    async sendEmail(emailAddress, type, payload) {
        try {
            if (this.validateEmail(emailAddress)) {
            }
            else {
                throw new common_1.BadRequestException("Could not send invite code email");
            }
        }
        catch (err) {
            throw new common_1.BadRequestException("Could not send invite code email");
        }
    }
    async sendInviteCodeEmail(emailAddress, name, inviteCode) {
        try {
            if (this.validateEmail(emailAddress)) {
                this.mailerService.sendInviteEmail(emailAddress, name, inviteCode);
                return {
                    Response: "Success",
                    Message: "Invite code sent successfully"
                };
            }
            else {
                throw new common_1.BadRequestException("Could not send invite code email");
            }
        }
        catch (err) {
            throw new common_1.BadRequestException("Could not send invite code email");
        }
    }
    validateEmail(email) {
        const regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return true;
    }
    async createOTP(emailAddress, userName) {
        const crypto = require("crypto");
        const n = crypto.randomInt(0, 1000000);
        const OTP = n.toString().padStart(6, "0");
        this.mailerService.sendVarificationEmail(emailAddress, userName, OTP);
        return {
            success: "success",
            otp: OTP
        };
    }
    async changeNotification(read, createdDate, userID, password) {
        if (password === "test") {
            try {
                const getNotification = await this.notificationRepository.find({ userID: userID });
                let notificationFound = new notification_entity_1.Notifications();
                for (let i = 0; i < getNotification.length; i++) {
                    if (getNotification[i].createdDateTime.getTime() === new Date(createdDate).getTime()) {
                        getNotification[i].readDateTime = read;
                        notificationFound = getNotification[i];
                        break;
                    }
                }
                this.notificationRepository.save(notificationFound);
                return {
                    status: "Success",
                    response: "Notification has been changed",
                    notification: notificationFound
                };
            }
            catch (err) {
                throw err;
            }
        }
    }
    async retrieveEmail(userID, unread, password) {
        if (password === "test") {
            try {
                const allUserNotifications = await this.notificationRepository.find({ userID: userID });
                if (unread) {
                    const notificationWithoutRead = [];
                    for (let i = 0; i < (await allUserNotifications).length; i++) {
                        if (allUserNotifications[i].readDateTime == false) {
                            notificationWithoutRead.push(allUserNotifications[i]);
                        }
                    }
                    return notificationWithoutRead;
                }
                else {
                    return allUserNotifications;
                }
            }
            catch (err) {
                throw err;
            }
        }
    }
};
NotificationService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(notification_entity_1.Notifications)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService,
        mail_service_1.MailService])
], NotificationService);
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map