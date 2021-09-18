"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GatewayModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const message_entity_1 = require("../message/message.entity");
const message_service_1 = require("../message/message.service");
const room_entity_1 = require("../room/room.entity");
const room_service_1 = require("../room/room.service");
const roomusers_entity_1 = require("../roomusers/roomusers.entity");
const roomusers_service_1 = require("../roomusers/roomusers.service");
const user_entity_1 = require("../user/user.entity");
const user_service_1 = require("../user/user.service");
const server_socket_gateway_1 = require("./server-socket.gateway");
let GatewayModule = class GatewayModule {
};
GatewayModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([message_entity_1.Message]),
            typeorm_1.TypeOrmModule.forFeature([room_entity_1.Room]),
            typeorm_1.TypeOrmModule.forFeature([roomusers_entity_1.RoomUsers]),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
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
        controllers: [],
        providers: [server_socket_gateway_1.ServerSocketGateway, message_service_1.MessageService, room_service_1.RoomService, roomusers_service_1.RoomUsersService, user_service_1.UserService],
    })
], GatewayModule);
exports.GatewayModule = GatewayModule;
//# sourceMappingURL=gateway.module.js.map