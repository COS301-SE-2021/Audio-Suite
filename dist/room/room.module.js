"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const room_service_1 = require("./room.service");
const room_controller_1 = require("./room.controller");
const room_entity_1 = require("./room.entity");
const roomusers_entity_1 = require("../roomusers/roomusers.entity");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("../user/user.entity");
const user_service_1 = require("../user/user.service");
const roomusers_service_1 = require("../roomusers/roomusers.service");
const config_1 = require("@nestjs/config");
let RoomModule = class RoomModule {
};
RoomModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([room_entity_1.Room]),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            typeorm_1.TypeOrmModule.forFeature([roomusers_entity_1.RoomUsers]),
            jwt_1.JwtModule.registerAsync({
                useFactory: (config) => {
                    return {
                        secret: config.get('JWT_SECRET_KEY'),
                        signOptions: {
                            expiresIn: config.get('JWT_EXPIRATION_TIME'),
                        },
                    };
                },
                inject: [config_1.ConfigService],
            })
        ],
        controllers: [room_controller_1.RoomController],
        providers: [room_service_1.RoomService, room_entity_1.Room, user_service_1.UserService, roomusers_service_1.RoomUsersService]
    })
], RoomModule);
exports.RoomModule = RoomModule;
//# sourceMappingURL=room.module.js.map