"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KanbanModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const kanban_controller_1 = require("./kanban.controller");
const kanban_entity_1 = require("./kanban.entity");
const kanban_service_1 = require("./kanban.service");
const user_service_1 = require("../user/user.service");
const user_entity_1 = require("../user/user.entity");
const office_entity_1 = require("../office/office.entity");
const office_service_1 = require("../office/office.service");
const officeusers_service_1 = require("../officeusers/officeusers.service");
const officeusers_entity_1 = require("../officeusers/officeusers.entity");
const room_service_1 = require("../room/room.service");
const room_entity_1 = require("../room/room.entity");
const roomusers_service_1 = require("../roomusers/roomusers.service");
const roomusers_entity_1 = require("../roomusers/roomusers.entity");
const config_1 = require("@nestjs/config");
let KanbanModule = class KanbanModule {
};
KanbanModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([kanban_entity_1.Kanban]),
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.User]),
            typeorm_1.TypeOrmModule.forFeature([office_entity_1.Office]),
            typeorm_1.TypeOrmModule.forFeature([officeusers_entity_1.OfficeUsers]),
            typeorm_1.TypeOrmModule.forFeature([room_entity_1.Room]),
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
        controllers: [kanban_controller_1.KanbanController],
        providers: [kanban_entity_1.Kanban, kanban_service_1.KanbanService, user_service_1.UserService, office_service_1.OfficeService, officeusers_service_1.OfficeusersService, room_service_1.RoomService, roomusers_service_1.RoomUsersService]
    })
], KanbanModule);
exports.KanbanModule = KanbanModule;
//# sourceMappingURL=kanban.module.js.map