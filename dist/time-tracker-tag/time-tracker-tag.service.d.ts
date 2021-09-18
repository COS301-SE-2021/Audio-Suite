import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { TimeTrackerTag } from './time-tracker-tag.entity';
export declare class TimeTrackerTagService {
    private timeTrackerTagRepository;
    private userService;
    constructor(timeTrackerTagRepository: Repository<TimeTrackerTag>, userService: UserService);
    registerNewTag(jwt: string, officeID: number, tag: string): Promise<{
        Response: string;
        Tag: TimeTrackerTag;
    }>;
    removeTag(jwt: string, officeID: number, tag: string): Promise<any>;
    getAllOfficeTags(jwt: string, officeID: any): Promise<any>;
}
