import { TimeTrackerProjectService } from './time-tracker-project.service';
export declare class TimeTrackerProjectController {
    private readonly timeTrackerProjectService;
    constructor(timeTrackerProjectService: TimeTrackerProjectService);
    registerProject(jwt: string, officeID: number, projectName: string): Promise<any>;
    removeProjectByID(jwt: string, id: number): Promise<any>;
    removeProjectByName(jwt: string, officeID: number, projectName: string): Promise<any>;
    getAllOfficeProjects(jwt: string, officeID: number): Promise<any>;
}
