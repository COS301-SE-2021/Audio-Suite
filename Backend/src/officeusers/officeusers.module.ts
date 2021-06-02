import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OfficeUsers } from "./officeusers.entity";
import { OfficeusersService } from "./officeusers.service";



@Module({
  imports: [TypeOrmModule.forFeature([OfficeUsers])],
  providers: [OfficeUsers, OfficeusersService]
})
export class OfficeusersModule {}
