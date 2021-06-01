import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { OfficeModule } from './office/office.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';

@Module({
  imports: [UserModule, OfficeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
