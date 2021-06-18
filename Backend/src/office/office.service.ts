import { BadRequestException, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { randomBytes } from "crypto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Office } from './office.entity';
import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';
import { OfficeUsers } from '../officeusers/officeusers.entity';
import { OfficeusersService } from '../officeusers/officeusers.service';

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
            if(user == null){
                throw new UnauthorizedException();
            }
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

    async getOfficeIdFromUserId(jwt: string): Promise<any> {
        //verify the user
        try{
            const user = await this.userService.validateUser(jwt);
        }catch(err){
            throw new UnauthorizedException();
        }

        try{
            const user = await this.userService.validateUser(jwt);
            const officeUsers: OfficeUsers[] = await this.officeUserService.getOfficeIdFromUserId(user.id);

            const offices: Office[] = [];
            for(let i = 0; i < officeUsers.length; i++){
                const tempOffice = await this.officesRepository.findOne({name: officeUsers[i].officeName});
                offices.push(tempOffice);

                if(i == officeUsers.length-1){
                    return{
                        Response: "Success",
                        Offices: offices
                    }
                }
            }
        }
        catch(err) {
            throw new BadRequestException();
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
            return {
                status: "Success",
                response: "User added to office"
            }
        }catch(err){
            throw new HttpException("Office with this name already exists.", 400);
        }
    }
}