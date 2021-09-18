import { Repository } from 'typeorm';
import { OfficeUsers } from './officeusers.entity';
export declare class OfficeusersService {
    private officeUsersRepository;
    constructor(officeUsersRepository: Repository<OfficeUsers>);
    addUserToOffice(userID: number, officeName: string, role: string): Promise<OfficeUsers>;
    getOfficeIdFromUserId(userID: number): Promise<any>;
}
