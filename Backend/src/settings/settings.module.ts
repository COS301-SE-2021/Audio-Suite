import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/user/user.service';
import { SettingsController } from './settings.controller';
import { Settings } from './settings.entity';
import { SettingsService } from './settings.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Settings]),
  ],
  controllers: [SettingsController],
  providers: [SettingsService, UserService]
})
export class SettingsModule {}
