import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomUsers } from './roomusers.entity';
import { RoomUsersService } from './roomusers.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoomUsers])
  ],
  providers: [RoomUsersService],
})
export class RoomusersModule {}
