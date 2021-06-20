import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { Notifications } from './notification.entity';
import { MailModule } from '../mail/mail.module';
import { MailService } from '../mail/mail.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notifications]),
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: 'secret', // TODO change to env var
      signOptions: {expiresIn: '1d'}
    }),
    MailModule
  ],
  providers: [NotificationService, UserService, Notifications, MailModule],
  controllers: [NotificationController]
})
export class NotificationModule {}
