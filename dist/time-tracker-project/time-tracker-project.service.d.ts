import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { TimeTrackerProject } from './time-tracker-project.entity';
export declare class TimeTrackerProjectService {
    private timeTrackerProjectRepository;
    private userService;
    constructor(timeTrackerProjectRepository: Repository<TimeTrackerProject>, userService: UserService);
    registerNewProject(jwt: string, officeID: number, projectName: string): Promise<any>;
    removeProjectByID(jwt: string, id: number): Promise<any>;
    removeProjectByName(jwt: string, officeID: number, projectName: string): Promise<any>;
    getAllOfficeProject(jwt: string, officeID: number): Promise<any>;
}
