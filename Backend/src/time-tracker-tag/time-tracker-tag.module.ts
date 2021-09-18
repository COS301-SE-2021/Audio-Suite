import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { TimeTrackerTagController } from './time-tracker-tag.controller';
import { TimeTrackerTag } from './time-tracker-tag.entity';
import { TimeTrackerTagService } from './time-tracker-tag.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TimeTrackerTag]),
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
  controllers: [TimeTrackerTagController],
  providers: [TimeTrackerTagService, UserService]
})
export class TimeTrackerTagModule {}
