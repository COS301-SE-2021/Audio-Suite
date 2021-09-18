import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Office } from "../office/office.entity";
import { OfficeService } from "src/office/office.service";
import { User } from "../user/user.entity";
import { UserService } from "../user/user.service";
import { OfficeUsers } from "./officeusers.entity";
import { OfficeusersService } from "./officeusers.service";
import { ConfigService } from "@nestjs/config";



@Module({
  imports: [TypeOrmModule.forFeature([OfficeUsers]),
  TypeOrmModule.forFeature([Office]),
  TypeOrmModule.forFeature([User]),
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
  providers: [OfficeUsers, OfficeusersService, UserService]
})
export class OfficeusersModule {}
