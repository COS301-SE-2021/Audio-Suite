import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OfficeModule } from './office/office.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Office } from './office/office.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '176.58.102.89', // TODO change to env var
      port: 3306, // TODO change to env var
      username: 'System', // TODO change to env var
      password: 'audiosuitetest', // TODO change to env var
      database: 'AUDIO_SUITE', // TODO change to env var
      entities: [Office, User],
      synchronize: true,}), // TODO change to false for production
    UserModule, 
    OfficeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
