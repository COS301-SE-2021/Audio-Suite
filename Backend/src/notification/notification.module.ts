import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { UserService } from 'src/user/user.service';
import { Notifications } from './notification.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notifications]),
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'secret', // TODO change to env var
      signOptions: {expiresIn: '1d'}
    })
  ],
  providers: [NotificationService, UserService, Notifications],
  controllers: [NotificationController]
})
export class NotificationModule {}
