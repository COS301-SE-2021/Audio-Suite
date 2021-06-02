import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { randomBytes } from "crypto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Office } from './office.entity';
import { UserService } from 'src/user/user.service';
import { User } from 'src/user/user.entity';
import { OfficeUsers } from 'src/officeusers/officeusers.entity';
import { OfficeusersService } from 'src/officeusers/officeusers.service';

@Injectable()
export class OfficeService {
    constructor(
        @InjectRepository(Office)
        private officesRepository: Repository<Office>,
        private userService: UserService,
        private officeUserService: OfficeusersService
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
            const user = await this.userService.validateUser(jwt);
            const office = await this.officesRepository.create({name, invite});
            const savedOffice = await this.officesRepository.save(office);
            const addUserToOffice = await this.officeUserService.addUserToOffice(user.id,name);
            return savedOffice;
        }
        catch(err) {
            throw new HttpException("Office with this name already exists.", 400);
        }
    }

    async joinUserToOffice(officeInviteLink: string, jwt: string): Promise<any>{
        //verify the user
        try{
            const user = await this.userService.validateUser(jwt);
        }catch(err){
            throw new UnauthorizedException();
        }
        //verifify the office
        try{
            const office = await this.officesRepository.findOne({invite: officeInviteLink});
        }catch(err){
            throw new UnauthorizedException();
        }
        try{
            const user = await this.userService.validateUser(jwt);
            const office = await this.officesRepository.findOne({invite: officeInviteLink});
            const addUserToOffice = await this.officeUserService.addUserToOffice(user.id,office.name);
        }catch(err){
            throw new HttpException("Office with this name already exists.", 400);
        }
    }
}