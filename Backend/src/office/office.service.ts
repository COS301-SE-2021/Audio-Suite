import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { randomBytes } from "crypto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Office } from './office.entity';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';

@Injectable()
export class OfficeService {
    constructor(
        @InjectRepository(Office)
        private officesRepository: Repository<Office>,
        private userService: UserService
        ) {}

    getOffice(): string {
        return 'Hello World, Office!';
    }

    async registerOffice(name: string, jwt: string): Promise<any>{
        const invite = randomBytes(16).toString("hex");
        try{
            const user = await this.userService.validateUser(jwt);
        }catch(err){
            throw new UnauthorizedException();
        }
        try{
            const office = await this.officesRepository.create({name, invite});
            const savedOffice = await this.officesRepository.save(office);
            return savedOffice;
        }
        catch(err) {{
            throw new HttpException("Office with this name already exists.", 400);
        }}
    }
}