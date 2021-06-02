import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfficeController } from './office.controller';
import { Office } from './office.entity';
import { OfficeService } from './office.service';
import { UserService } from '../user/user.service';
import {JwtModule} from "@nestjs/jwt";
import { User } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Office]),
  TypeOrmModule.forFeature([User]),
  JwtModule.register({
    secret: 'secret', // TODO change to env var
    signOptions: {expiresIn: '1d'}
  })
],
  controllers: [OfficeController],
  providers: [Office, OfficeService, UserService]
})
export class OfficeModule {}
