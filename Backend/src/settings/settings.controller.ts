import { Controller, Post } from '@nestjs/common';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
    constructor(private settingsService: SettingsService){}

    @Post('')
    async getUser(){
        return this.settingsService.getUser();
    }
}
