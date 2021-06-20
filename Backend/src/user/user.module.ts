import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {JwtModule} from "@nestjs/jwt";
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'secret', // TODO change to env var
      signOptions: {expiresIn: '1d'}
    })
  ],
  exports: [UserService],
  controllers: [UserController],
  providers: [User, UserService]
})
export class UserModule {}
