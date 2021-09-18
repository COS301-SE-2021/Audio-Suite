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
exports.NotificationController = void 0;
const common_1 = require("@nestjs/common");
const notification_service_1 = require("./notification.service");
let NotificationController = class NotificationController {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    getNotifications() {
        return this.notificationService.getNotification();
    }
    async createNotification(userID, type, invite, userName, emailAddress, password) {
        return await this.notificationService.createNotification(userID, type, invite, userName, emailAddress, password);
    }
    async sendEmail(emailAddress, name, inviteCode) {
        return await this.notificationService.sendInviteCodeEmail(emailAddress, name, inviteCode);
    }
    async sendVarification(emailAddress, userName) {
        return await this.notificationService.createOTP(emailAddress, userName);
    }
    async changeNotification(read, createdDate, userID, password) {
        return await this.notificationService.changeNotification(read, createdDate, userID, password);
    }
    async retrieveNotification(userID, unread, password) {
        return await this.notificationService.retrieveEmail(userID, unread, password);
    }
};
__decorate([
    common_1.Get('notifications/allNotifications'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], NotificationController.prototype, "getNotifications", null);
__decorate([
    common_1.Post('notifications/createNotification'),
    __param(0, common_1.Body('userID')),
    __param(1, common_1.Body('type')),
    __param(2, common_1.Body('invite')),
    __param(3, common_1.Body('userName')),
    __param(4, common_1.Body('emailAddress')),
    __param(5, common_1.Body('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "createNotification", null);
__decorate([
    common_1.Post('notifications/sendInviteCode'),
    __param(0, common_1.Body('emailAddress')),
    __param(1, common_1.Body('name')),
    __param(2, common_1.Body('inviteCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "sendEmail", null);
__decorate([
    common_1.Post('notifications/sendVerification'),
    __param(0, common_1.Body('emailAddress')),
    __param(1, common_1.Body('userName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "sendVarification", null);
__decorate([
    common_1.Post('notifications/changeNotification'),
    __param(0, common_1.Body('read')),
    __param(1, common_1.Body('createdDate')),
    __param(2, common_1.Body('userID')),
    __param(3, common_1.Body('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Boolean, Date, String, String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "changeNotification", null);
__decorate([
    common_1.Post('notifications/retrieveNotification'),
    __param(0, common_1.Body('userID')),
    __param(1, common_1.Body('unread')),
    __param(2, common_1.Body('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean, String]),
    __metadata("design:returntype", Promise)
], NotificationController.prototype, "retrieveNotification", null);
NotificationController = __decorate([
    common_1.Controller('api'),
    __metadata("design:paramtypes", [notification_service_1.NotificationService])
], NotificationController);
exports.NotificationController = NotificationController;
//# sourceMappingURL=notification.controller.js.map