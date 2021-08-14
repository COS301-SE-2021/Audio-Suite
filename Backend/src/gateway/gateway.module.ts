import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from 'src/message/message.entity';
import { MessageService } from 'src/message/message.service';
import { RoomUsers } from 'src/roomusers/roomusers.entity';
import { RoomUsersService } from 'src/roomusers/roomusers.service';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { ServerSocketGateway } from './server-socket.gateway';

@Module({
    imports: [
        TypeOrmModule.forFeature([Message]),
        TypeOrmModule.forFeature([RoomUsers]),
        TypeOrmModule.forFeature([User]),
        JwtModule.register({
            secret: 'secret', // TODO change to env var
            signOptions: {expiresIn: '1d'}
          })
    ],
    controllers: [],
    providers: [ServerSocketGateway, MessageService, RoomUsersService, UserService],
})
export class GatewayModule {}
