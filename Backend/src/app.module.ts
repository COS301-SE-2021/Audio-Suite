import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OfficeModule } from './office/office.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfficeusersModule } from './officeusers/officeusers.module';
import { NotificationModule } from './notification/notification.module';
import { MailModule } from './mail/mail.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RoomModule } from './room/room.module';
import { RoomusersModule } from './roomusers/roomusers.module';
import { MessageModule } from './message/message.module';
import { GatewayModule } from './gateway/gateway.module';
import { KanbanModule } from './kanban/kanban.module';
import { TimeTrackerTagModule } from './time-tracker-tag/time-tracker-tag.module';
import { TimeTrackerProjectModule } from './time-tracker-project/time-tracker-project.module';
import { TimeTrackerUserModule } from './time-tracker-user/time-tracker-user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UserModule, 
    OfficeModule, 
    OfficeusersModule, 
    NotificationModule, 
    MailModule, 
    RoomModule, 
    RoomusersModule, 
    MessageModule,
    GatewayModule,
    KanbanModule,
    TimeTrackerTagModule,
    TimeTrackerProjectModule,
    TimeTrackerUserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
