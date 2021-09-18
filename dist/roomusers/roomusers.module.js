"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomusersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const roomusers_entity_1 = require("./roomusers.entity");
const roomusers_service_1 = require("./roomusers.service");
let RoomusersModule = class RoomusersModule {
};
RoomusersModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([roomusers_entity_1.RoomUsers])
        ],
        providers: [roomusers_service_1.RoomUsersService],
    })
], RoomusersModule);
exports.RoomusersModule = RoomusersModule;
//# sourceMappingURL=roomusers.module.js.map