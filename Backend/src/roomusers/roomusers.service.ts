import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomUsers } from './roomusers.entity';

@Injectable()
export class RoomUsersService {
    constructor(
        @InjectRepository(RoomUsers)
        private roomUsersRepository: Repository<RoomUsers>
    ){}

    async addUserToRoom(officeID: number, roomID: number, userID: number): Promise<any>
    {
        try{
            const roomUser = await this.roomUsersRepository.create({officeID, roomID, userID});
            const savedRoomUser = await this.roomUsersRepository.save(roomUser);
            return{
                Response: "Success",
                RoomUser: savedRoomUser
            }
        }
        catch(err) {
            throw new HttpException("Could not add user to room.", 400);
        }
    }

    async removeUserFromRoom(officeID: number, roomID: number,  userID: number): Promise<any>
    {
        try{
            const roomUser = await this.roomUsersRepository.findOne({officeID, roomID, userID});
            const removedRoomUser = await this.roomUsersRepository.remove(roomUser);
            return{
                Response: "Success",
                RemovedRoomUser: removedRoomUser
            }
        }
        catch(err) {
            throw new HttpException("Could not remove user from room.", 400);
        }
    }
}
