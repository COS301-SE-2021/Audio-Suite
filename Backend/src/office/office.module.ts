import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfficeController } from './office.controller';
import { Office } from './office.entity';
import { OfficeService } from './office.service';
import { UserService } from '../user/user.service';
import {JwtModule} from "@nestjs/jwt";
import { User } from 'src/user/user.entity';
import { OfficeUsers } from 'src/officeusers/officeusers.entity';
import { OfficeusersService } from 'src/officeusers/officeusers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Office]),
  TypeOrmModule.forFeature([User]),
  TypeOrmModule.forFeature([OfficeUsers]),
  JwtModule.register({
    secret: 'secret', // TODO change to env var
    signOptions: {expiresIn: '1d'}
  })
],
  controllers: [OfficeController],
  providers: [Office, OfficeService, UserService, OfficeusersService]
})
export class OfficeModule {}
