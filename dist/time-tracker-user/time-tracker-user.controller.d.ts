import { TimeTrackerUserService } from './time-tracker-user.service';
export declare class TimeTrackerUserController {
    private readonly timeTrackerUserService;
    constructor(timeTrackerUserService: TimeTrackerUserService);
    registerTrackingInstance(jwt: string, officeID: number, description: string, projectID: number, tagID: number, startTime: string, endTime: string): Promise<{
        Response: string;
        TrackingInstance: import("./time-tracker-user.entity").TimeTrackerUser;
    }>;
    getTrackingInstances(jwt: string, officeID: number): Promise<any>;
}
