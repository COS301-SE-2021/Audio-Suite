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
exports.OfficeUsers = void 0;
const user_entity_1 = require("../user/user.entity");
const typeorm_1 = require("typeorm");
let OfficeUsers = class OfficeUsers {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], OfficeUsers.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], OfficeUsers.prototype, "userID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OfficeUsers.prototype, "officeName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], OfficeUsers.prototype, "role", void 0);
OfficeUsers = __decorate([
    typeorm_1.Entity()
], OfficeUsers);
exports.OfficeUsers = OfficeUsers;
//# sourceMappingURL=officeusers.entity.js.map