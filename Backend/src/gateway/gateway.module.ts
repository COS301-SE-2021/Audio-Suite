import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from 'src/message/message.entity';
import { MessageService } from 'src/message/message.service';
import { Room } from 'src/room/room.entity';
import { RoomService } from 'src/room/room.service';
import { RoomUsers } from 'src/roomusers/roomusers.entity';
import { RoomUsersService } from 'src/roomusers/roomusers.service';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { ServerSocketGateway } from './server-socket.gateway';

@Module({
    imports: [
        TypeOrmModule.forFeature([Message]),
        TypeOrmModule.forFeature([Room]),
        TypeOrmModule.forFeature([RoomUsers]),
        TypeOrmModule.forFeature([User]),
        JwtModule.registerAsync({
            useFactory: (config: ConfigService) => {
              return {
                secret: config.get<string>('JWT_SECRET_KEY'),
                signOptions: {
                  expiresIn: config.get<string | number>('JWT_EXPIRATION_TIME'),
                },
              };
            },
            inject: [ConfigService],
          })
    ],
    controllers: [],
    providers: [ServerSocketGateway, MessageService, RoomService, RoomUsersService, UserService],
})
export class GatewayModule {}
