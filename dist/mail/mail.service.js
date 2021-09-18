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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../user/user.entity");
let MailService = class MailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    ;
    async sendVarificationEmail(emailAddress, userName, otp) {
        await this.mailerService.sendMail({
            to: emailAddress,
            subject: "OTP Verification",
            template: './confirmation',
            context: {
                name: userName,
                otp,
            },
        });
    }
    async sendInviteEmail(emailAddress, name, inviteCode) {
        await this.mailerService.sendMail({
            to: emailAddress,
            subject: "Office invite link",
            template: './sendInvite',
            context: {
                name: name,
                inviteCode: inviteCode,
            },
        });
    }
};
MailService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], MailService);
exports.MailService = MailService;
//# sourceMappingURL=mail.service.js.map