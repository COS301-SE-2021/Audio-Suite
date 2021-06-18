import { BadRequestException, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomUsersService } from 'src/roomusers/roomusers.service';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { Room } from './room.entity';

@Injectable()
export class RoomService {
    constructor(
        @InjectRepository(Room)
        private roomRepository: Repository<Room>,
        private userService: UserService,
        private roomUserService: RoomUsersService
    )
    {}

    async getOfficeRooms(jwt: string, officeID: number): Promise<any>{
        try{
            const user = await this.userService.validateUser(jwt);
            if(user == null){
                throw new UnauthorizedException();
            }
        }
        catch(err){
            throw new UnauthorizedException();
        }

        return {
            Response: "Success",
            Rooms: await this.roomRepository.find({officeID: officeID})
        }
    }

    async registerRoom(jwt: string, officeID: number, roomName: string): Promise<any> {
        try{
            const user = await this.userService.validateUser(jwt);
            if(user == null){
                throw new UnauthorizedException();
            }
        }
        catch(err){
            throw new UnauthorizedException();
        }

        try{
            const room = await this.roomRepository.create({officeID, roomName});
            const savedRoom = await this.roomRepository.save(room);
            return {
                Response: "Success",
                Room: savedRoom
            };
        }
        catch(err){
            throw new BadRequestException();
        }
    }

    async joinRoom(jwt: string, officeID: number, roomId: number): Promise<any> {
        try{
            const user = await this.userService.validateUser(jwt);
            if(user == null){
                throw new UnauthorizedException();
            }
        }
        catch(err){
            throw new UnauthorizedException();
        }

        try{
            const room = await this.roomRepository.findOne({id: roomId});
        }
        catch(err) {
            throw new HttpException("No room with the supplied ID exists.", 400);
        }

        const user = await this.userService.validateUser(jwt);
        return await this.roomUserService.addUserToRoom(officeID, roomId, user.id);
    }

    async leaveRoom(jwt: string, officeID: number, roomId: number): Promise<any> {
        try{
            const user = await this.userService.validateUser(jwt);
            if(user == null){
                throw new UnauthorizedException();
            }
        }
        catch(err){
            throw new UnauthorizedException();
        }

        try{
            const room = await this.roomRepository.findOne({id: roomId});
        }
        catch(err) {
            throw new HttpException("No room with the supplied ID exists.", 400);
        }

        const user = await this.userService.validateUser(jwt);
        return await this.roomUserService.removeUserFromRoom(officeID, roomId, user.id);
    }

    //TODO delete a room
}
