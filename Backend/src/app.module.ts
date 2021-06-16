import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OfficeModule } from './office/office.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Office } from './office/office.entity';
import { OfficeusersModule } from './officeusers/officeusers.module';
import { OfficeUsers } from './officeusers/officeusers.entity';
import { NotificationModule } from './notification/notification.module';
import { Notifications } from './notification/notification.entity';
import { Settings } from './settings/settings.entity';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '176.58.102.89', // TODO change to env var
      port: 3306, // TODO change to env var
      username: 'System', // TODO change to env var
      password: 'audiosuitetest', // TODO change to env var
      database: 'AUDIO_SUITE', // TODO change to env var
      entities: [User, Office, OfficeUsers, Notifications, Settings],
      synchronize: true,}), // TODO change to false for production
    UserModule, 
    OfficeModule, 
    OfficeusersModule, NotificationModule, MailModule, SettingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
