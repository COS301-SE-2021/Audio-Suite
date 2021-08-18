import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {JwtModule} from "@nestjs/jwt";
import { KanbanController } from './kanban.controller';
import { Kanban } from './kanban.entity';
import { KanbanService } from './kanban.service';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';
import { Office } from 'src/office/office.entity';
import { OfficeService } from 'src/office/office.service';
import { OfficeusersService } from 'src/officeusers/officeusers.service';
import { OfficeUsers } from 'src/officeusers/officeusers.entity';
import { RoomService } from 'src/room/room.service';
import { Room } from 'src/room/room.entity';
import { RoomUsersService } from 'src/roomusers/roomusers.service';
import { RoomUsers } from 'src/roomusers/roomusers.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Kanban]),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Office]),
    TypeOrmModule.forFeature([OfficeUsers]),
    TypeOrmModule.forFeature([Room]),
    TypeOrmModule.forFeature([RoomUsers]),
    JwtModule.register({
      secret: 'secret', // TODO change to env var
      signOptions: {expiresIn: '1d'}
    })
  ],
  controllers: [KanbanController],
  providers: [Kanban, KanbanService, UserService, OfficeService, OfficeusersService, RoomService, RoomUsersService]
})
export class KanbanModule {}
