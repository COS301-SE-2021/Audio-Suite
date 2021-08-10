import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OfficeModule } from './office/office.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Office } from './office/office.entity';
import { OfficeusersModule } from './officeusers/officeusers.module';
import { OfficeUsers } from './officeusers/officeusers.entity';
import { NotificationModule } from './notification/notification.module';
import { Notifications } from './notification/notification.entity';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { RoomModule } from './room/room.module';
import { RoomusersModule } from './roomusers/roomusers.module';
import { Room } from './room/room.entity';
import { RoomUsers } from './roomusers/roomusers.entity';
import { TextChannelsGateway } from './text-channels/text-channels.gateway';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '34.123.22.210', // TODO change to env var
      port: 3306, // TODO change to env var
      username: 'AudioSuiteDev', // TODO change to env var
      password: '4uLrYf49J3W6az', // TODO change to env var
      database: 'AUDIO_SUITE', // TODO change to env var
      entities: [User, Office, OfficeUsers, Notifications, Room, RoomUsers],
      synchronize: true,}), // TODO change to false for production
    UserModule, 
    OfficeModule, 
    OfficeusersModule, 
    NotificationModule, 
    MailModule, 
    RoomModule, 
    RoomusersModule],
  controllers: [AppController],
  providers: [AppService, TextChannelsGateway],
})
export class AppModule {}
