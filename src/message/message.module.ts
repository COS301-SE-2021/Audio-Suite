import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { Message } from './message.entity';
import { MessageService } from './message.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Message]),
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
  controllers: [],
  providers: [MessageService, UserService]
})
export class MessageModule {}
