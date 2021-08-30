import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { Room } from './room.entity';
import { RoomUsers } from '../roomusers/roomusers.entity';
import { JwtModule } from '@nestjs/jwt';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { RoomUsersService } from '../roomusers/roomusers.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forFeature([Room]),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([RoomUsers]),
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
  controllers: [RoomController],
  providers: [RoomService, Room, UserService, RoomUsersService]
})
export class RoomModule {}
