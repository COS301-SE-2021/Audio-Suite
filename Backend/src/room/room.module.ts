import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { Room } from './room.entity';
import { RoomUsers } from 'src/roomusers/roomusers.entity';
import { JwtModule } from '@nestjs/jwt';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { RoomUsersService } from 'src/roomusers/roomusers.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Room]),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([RoomUsers]),
    JwtModule.register({
      secret: 'secret', // TODO change to env var
      signOptions: {expiresIn: '1d'}
    })
  ],
  controllers: [RoomController],
  providers: [RoomService, Room, UserService, RoomUsersService]
})
export class RoomModule {}
