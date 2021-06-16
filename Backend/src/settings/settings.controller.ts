import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SettingsService } from './settings.service';


@Controller('api/settings')
export class SettingsController {
    constructor(
        private settingsService: SettingsService,
        private userService: UserService){}

    // This function is to change your visual appearnce of AudioSuite.
    @Post('changeMode')
    async changeMode(
        @Body('jwt') jwt: string,
        @Body('mode') mode: boolean
    ){
        try {
            const setting = await this.settingsService.changeMode(jwt, mode);
            if(setting!=null){
                return {Response: "Success", userSettings: setting};
            }else{
                return {Response: "Unsuccessful"};
            }
        } catch (error) {
            throw new UnauthorizedException();
        }
    }
}
