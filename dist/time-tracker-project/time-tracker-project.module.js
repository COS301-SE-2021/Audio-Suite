"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeTrackerProjectModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("../user/user.entity");
const user_service_1 = require("../user/user.service");
const time_tracker_project_controller_1 = require("./time-tracker-project.controller");
const time_tracker_project_entity_1 = require("./time-tracker-project.entity");
const time_tracker_project_service_1 = require("./time-tracker-project.service");
let TimeTrackerProjectModule = class TimeTrackerProjectModule {
};
TimeTrackerProjectModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([time_tracker_project_entity_1.TimeTrackerProject]),
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
        controllers: [time_tracker_project_controller_1.TimeTrackerProjectController],
        providers: [time_tracker_project_service_1.TimeTrackerProjectService, user_service_1.UserService]
    })
], TimeTrackerProjectModule);
exports.TimeTrackerProjectModule = TimeTrackerProjectModule;
//# sourceMappingURL=time-tracker-project.module.js.map