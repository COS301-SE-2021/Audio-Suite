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
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RoomModule } from './room/room.module';
import { RoomusersModule } from './roomusers/roomusers.module';
import { Room } from './room/room.entity';
import { RoomUsers } from './roomusers/roomusers.entity';
import { ServerSocketGateway } from './gateway/server-socket.gateway';
import { RoomUsersService } from './roomusers/roomusers.service';
import { MessageModule } from './message/message.module';
import { GatewayModule } from './gateway/gateway.module';
import { Message } from './message/message.entity';
import { KanbanModule } from './kanban/kanban.module';
import { Kanban } from './kanban/kanban.entity';

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
    KanbanModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
