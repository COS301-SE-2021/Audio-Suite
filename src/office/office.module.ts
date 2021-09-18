import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfficeController } from './office.controller';
import { Office } from './office.entity';
import { OfficeService } from './office.service';
import { UserService } from '../user/user.service';
import {JwtModule} from "@nestjs/jwt";
import { User } from '../user/user.entity';
import { OfficeUsers } from '../officeusers/officeusers.entity';
import { OfficeusersService } from '../officeusers/officeusers.service';
import { RoomService } from 'src/room/room.service';
import { Room } from 'src/room/room.entity';
import { RoomUsers } from 'src/roomusers/roomusers.entity';
import { RoomUsersService } from 'src/roomusers/roomusers.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Office]),
  TypeOrmModule.forFeature([User]),
  TypeOrmModule.forFeature([OfficeUsers]),
  TypeOrmModule.forFeature([Room]),
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
  controllers: [OfficeController],
  providers: [Office, OfficeService, UserService, OfficeusersService, RoomService, RoomUsersService],
})
export class OfficeModule {}
