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
      host: '176.58.102.89',
      port: 3306,
      username: 'System',
      password: 'audiosuitetest',
      database: 'AUDIO_SUITE',
      entities: [Office, User],
      synchronize: true,}),
    UserModule, 
    OfficeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
