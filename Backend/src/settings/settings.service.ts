import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { Connection, Repository, RepositoryNotFoundError } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Settings } from './settings.entity';

@Injectable()
export class SettingsService {
    constructor(
        @InjectRepository(Settings)
        private settingsRepository : Repository<Settings>,
        private userService: UserService
    ) {}

    // These default settings are called when a user is created.
    public async defaultSettings(id: number){
        const userID = id;
        const darkMode = true;

        const def = await this.settingsRepository.create({userID, darkMode});
        const setting = await this.settingsRepository.save(def);
        
        return setting;
    }

    // Called when a user wants to change their Audio Suite appearance.
    public async changeMode(jwt: string, mode: boolean){
        try {
            const user = await this.userService.validateUser(jwt);
            const setting = await this.settingsRepository.save({userID: user.id, darkMode: mode});
            
            return setting;
        } catch (error) {
            throw new UnauthorizedException();
        }
    }
}
