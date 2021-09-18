import { TimeTrackerTagService } from './time-tracker-tag.service';
export declare class TimeTrackerTagController {
    private readonly timeTrackerTagService;
    constructor(timeTrackerTagService: TimeTrackerTagService);
    registerProject(jwt: string, officeID: number, tagName: string): Promise<{
        Response: string;
        Tag: import("./time-tracker-tag.entity").TimeTrackerTag;
    }>;
    removeProject(jwt: string, officeID: number, tagName: string): Promise<any>;
    getOfficeTags(jwt: string, officeID: number): Promise<any>;
}
