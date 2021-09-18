"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfficeusersModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const office_entity_1 = require("../office/office.entity");
const office_service_1 = require("../office/office.service");
const user_entity_1 = require("../user/user.entity");
const user_service_1 = require("../user/user.service");
const officeusers_entity_1 = require("./officeusers.entity");
const officeusers_service_1 = require("./officeusers.service");
const config_1 = require("@nestjs/config");
let OfficeusersModule = class OfficeusersModule {
};
OfficeusersModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([officeusers_entity_1.OfficeUsers]),
            typeorm_1.TypeOrmModule.forFeature([office_entity_1.Office]),
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
        providers: [officeusers_entity_1.OfficeUsers, officeusers_service_1.OfficeusersService, user_service_1.UserService]
    })
], OfficeusersModule);
exports.OfficeusersModule = OfficeusersModule;
//# sourceMappingURL=officeusers.module.js.map