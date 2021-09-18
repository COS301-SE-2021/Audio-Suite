import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { TimeTrackerProjectController } from './time-tracker-project.controller';
import { TimeTrackerProject } from './time-tracker-project.entity';
import { TimeTrackerProjectService } from './time-tracker-project.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TimeTrackerProject]),
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
  controllers: [TimeTrackerProjectController],
  providers: [TimeTrackerProjectService, UserService]
})
export class TimeTrackerProjectModule {}
