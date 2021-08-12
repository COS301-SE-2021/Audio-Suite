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

@Module({
  imports: [
    TypeOrmModule.forFeature([Kanban]),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Office]),
    JwtModule.register({
      secret: 'secret', // TODO change to env var
      signOptions: {expiresIn: '1d'}
    })
  ],
  controllers: [KanbanController],
  providers: [Kanban, KanbanService, UserService, OfficeService]
})
export class KanbanModule {}
