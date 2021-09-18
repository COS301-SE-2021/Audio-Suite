import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { TimeTrackerUserController } from './time-tracker-user.controller';
import { TimeTrackerUser } from './time-tracker-user.entity';
import { TimeTrackerUserService } from './time-tracker-user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TimeTrackerUser]),
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
  controllers: [TimeTrackerUserController],
  providers: [TimeTrackerUserService, UserService]
})
export class TimeTrackerUserModule {}
