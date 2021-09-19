import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {JwtModule} from "@nestjs/jwt";
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
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
  exports: [UserService],
  controllers: [UserController],
  providers: [User, UserService]
})
export class UserModule {}
