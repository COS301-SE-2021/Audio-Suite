import { BadGatewayException, BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OfficeUsers } from './officeusers.entity';

@Injectable()
export class OfficeusersService {
    constructor(
        @InjectRepository(OfficeUsers)
        private officeUsersRepository: Repository<OfficeUsers>
        ) {}

    async addUserToOffice(userID: number, officeName: string){
        //try add the user to an office
        try{
            const officeUser = await this.officeUsersRepository.create({userID,officeName});
            const saveOfficeUser = await this.officeUsersRepository.save(officeUser);
            return saveOfficeUser;
        }catch(err){
            throw new BadRequestException();
        }
    }
    // TODO add services to add office and user
}