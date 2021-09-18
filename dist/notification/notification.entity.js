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
exports.Notifications = void 0;
const user_entity_1 = require("../user/user.entity");
const typeorm_1 = require("typeorm");
let Notifications = class Notifications {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Notifications.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Notifications.prototype, "payload", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Notifications.prototype, "userID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Notifications.prototype, "readDateTime", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Notifications.prototype, "createdDateTime", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Notifications.prototype, "notificationType", void 0);
Notifications = __decorate([
    typeorm_1.Entity()
], Notifications);
exports.Notifications = Notifications;
//# sourceMappingURL=notification.entity.js.map