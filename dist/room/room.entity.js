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
exports.Room = void 0;
const typeorm_1 = require("typeorm");
let Room = class Room {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Room.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Room.prototype, "officeID", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Room.prototype, "roomName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Room.prototype, "roomType", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Room.prototype, "xCoordinate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Room.prototype, "yCoordinate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Room.prototype, "width", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Room.prototype, "height", void 0);
Room = __decorate([
    typeorm_1.Entity()
], Room);
exports.Room = Room;
//# sourceMappingURL=room.entity.js.map