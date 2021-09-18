import { OfficeService } from './office.service';
export declare class OfficeController {
    private readonly officeService;
    constructor(officeService: OfficeService);
    getOffice(): String;
    addUserByInvite(id: string, jwt: string): Promise<any>;
    registerOffice(name: string, jwt: string): Promise<any>;
    joinUserToOffice(invite: string, jwt: string): Promise<any>;
    getUserOffices(jwt: string): Promise<any>;
    getOfficeFromOfficeID(jwt: string, officeID: number): Promise<any>;
}
