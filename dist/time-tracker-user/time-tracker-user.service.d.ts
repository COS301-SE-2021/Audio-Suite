import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { TimeTrackerUser } from './time-tracker-user.entity';
export declare class TimeTrackerUserService {
    private timetrackerUserRepository;
    private userService;
    constructor(timetrackerUserRepository: Repository<TimeTrackerUser>, userService: UserService);
    addNewTimeTrackingInstance(jwt: string, officeID: number, description: string, projectID: number, tagID: number, startTime: string, endTime: string): Promise<{
        Response: string;
        TrackingInstance: TimeTrackerUser;
    }>;
    getAllUserOfficeTrackingInstances(jwt: string, officeID: number): Promise<any>;
}
