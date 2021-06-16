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
    public async setMode(jwt: string, mode: boolean){
        try {
            const user = await this.userService.validateUser(jwt);
            const setting = await this.settingsRepository.save({userID: user.id, darkMode: mode, userName:user.userName});

            return setting;
        } catch (error) {
            throw new UnauthorizedException();
        }
    }

    //Called when a user wants to update their Username.
    public async setUsername(jwt: string, userName: string){
        try {
            const user = await this.userService.validateUser(jwt);
            await this.userService.setUsername(jwt, userName);
            const setting = await this.settingsRepository.createQueryBuilder().update(user).set({
                userName: userName
            }).where("id = :id", { id:user.id }).execute();
            
            return setting;
        } catch (error) {
            throw new UnauthorizedException();
        }
    }
}
