import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Office } from "src/office/office.entity";
import { OfficeService } from "src/office/office.service";
import { User } from "src/user/user.entity";
import { UserService } from "src/user/user.service";
import { OfficeUsers } from "./officeusers.entity";
import { OfficeusersService } from "./officeusers.service";



@Module({
  imports: [TypeOrmModule.forFeature([OfficeUsers]),
  TypeOrmModule.forFeature([Office]),
  TypeOrmModule.forFeature([User]),
  JwtModule.register({
    secret: 'secret', // TODO change to env var
    signOptions: {expiresIn: '1d'}
  })
],
  providers: [OfficeUsers, OfficeusersService, UserService]
})
export class OfficeusersModule {}
