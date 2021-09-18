"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./user/user.module");
const office_module_1 = require("./office/office.module");
const typeorm_1 = require("@nestjs/typeorm");
const officeusers_module_1 = require("./officeusers/officeusers.module");
const notification_module_1 = require("./notification/notification.module");
const mail_module_1 = require("./mail/mail.module");
const config_1 = require("@nestjs/config");
const room_module_1 = require("./room/room.module");
const roomusers_module_1 = require("./roomusers/roomusers.module");
const message_module_1 = require("./message/message.module");
const gateway_module_1 = require("./gateway/gateway.module");
const kanban_module_1 = require("./kanban/kanban.module");
const time_tracker_tag_module_1 = require("./time-tracker-tag/time-tracker-tag.module");
const time_tracker_project_module_1 = require("./time-tracker-project/time-tracker-project.module");
const time_tracker_user_module_1 = require("./time-tracker-user/time-tracker-user.module");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path_1.join(__dirname, '..', 'Audio_Suite'),
                exclude: ['/api*'],
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.get('DB_HOST'),
                    port: +configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_DATABASE'),
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
            user_module_1.UserModule,
            office_module_1.OfficeModule,
            officeusers_module_1.OfficeusersModule,
            notification_module_1.NotificationModule,
            mail_module_1.MailModule,
            room_module_1.RoomModule,
            roomusers_module_1.RoomusersModule,
            message_module_1.MessageModule,
            gateway_module_1.GatewayModule,
            kanban_module_1.KanbanModule,
            time_tracker_tag_module_1.TimeTrackerTagModule,
            time_tracker_project_module_1.TimeTrackerProjectModule,
            time_tracker_user_module_1.TimeTrackerUserModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map