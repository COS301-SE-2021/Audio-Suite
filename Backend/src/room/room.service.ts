import { BadRequestException, HttpException, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomUsersService } from '../roomusers/roomusers.service';
import { UserService } from '../user/user.service';
import { Repository } from 'typeorm';
import { Room } from './room.entity';
import { RoomUsers } from 'src/roomusers/roomusers.entity';

@Injectable()
export class RoomService {
    private logger: Logger = new Logger('RoomService');

    constructor(
        @InjectRepository(Room)
        private roomRepository: Repository<Room>,
        private userService: UserService,
        private roomUserService: RoomUsersService
    )
    {
        this.logger.log("Initialised")
    }

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

    async registerRoomAuth(officeID: number, roomName: string, xCoordinate: number, yCoordinate: number, width: number, height: number): Promise<any> {
        try{
            const roomExists = await this.roomRepository.find({officeID, roomName});
            if(roomExists.length > 0){
                throw new BadRequestException("Room already exists in this office.");
            }
        }
        catch(err){
            throw new BadRequestException("Room already exists in this office.");
        }
        
        try{
            const room = await this.roomRepository.create({officeID, roomName, xCoordinate, yCoordinate, width, height});
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

    async registerRoom(jwt: string, officeID: number, roomName: string, xCoordinate: number, yCoordinate: number, width: number, height: number): Promise<any> {
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
            const roomExists = await this.roomRepository.find({officeID, roomName});
            if(roomExists.length > 0){
                throw new BadRequestException("Room already exists in this office.");
            }
        }
        catch(err){
            throw new BadRequestException("Room already exists in this office.");
        }

        try{
            const room = await this.roomRepository.create({officeID, roomName, xCoordinate, yCoordinate, width, height});
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

    async updateRoomDetails(jwt: string, officeID: number, roomName: string, xCoordinate: number, yCoordinate: number, width: number, height: number): Promise<any> {
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
            const oldRoom = await this.roomRepository.findOne({officeID, roomName});
            var id = oldRoom.id;
            const newRoom = await this.roomRepository.create({id, officeID, roomName, xCoordinate, yCoordinate, width, height});
            const savedRoom = await this.roomRepository.save(newRoom);
            this.logger.log("Updating Room with ID: " + id);
            return {
                Response: "Success",
                UpdatedRoom: savedRoom
            };
        }
        catch(err){
            throw new BadRequestException(err.message);
        }
    }

    async deleteRoom(jwt: string, officeID: number, roomName: string): Promise<any>{
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
            const room = await this.roomRepository.findOne({officeID, roomName});
            const id = room.id;
            const deletedRoom = await this.roomRepository.delete({id});
            return {
                Response: "Success",
                DeletedRoom: deletedRoom,
                Rooms: await this.roomRepository.find({officeID: officeID})
            }
        }
        catch(err){
            throw new BadRequestException(err.message);
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
        const room = await this.roomRepository.findOne({id: roomId});
        return await this.roomUserService.addUserToRoom(officeID, roomId, room.roomName, user.id, user.userName);
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
        const room = await this.roomRepository.findOne({id: roomId});
        return await this.roomUserService.removeUserFromRoom(officeID, roomId, room.roomName, user.id, user.userName);
    }

    //Find what room a user is in
    async findWhatRoomAUserIsIn(jwt: string, userID: number): Promise<any>{
        try{
            const user = await this.userService.validateUser(jwt);
            if(user == null){
                throw new UnauthorizedException();
            }
        }
        catch(err){
            throw new UnauthorizedException();
        }
        
        return await this.roomUserService.findWhatRoomAUserIsIn(userID);
    }

    async addUserToRoomUsersFromRoomName(jwt: string, officeID: number, roomName: string): Promise<any>{
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
            await this.roomRepository.findOneOrFail({officeID, roomName});
        }
        catch(err){
            return {
                Response: "Unsuccessfull",
                Message: "No room exits with the name: " + roomName
            }
        }

        try{
            const user = await this.userService.validateUser(jwt);
            const room = await this.roomRepository.findOne({officeID, roomName});
            const savedInRoomUsers = await this.roomUserService.addUserToRoom(officeID, room.id, roomName, user.id, user.userName);
            return {
                Response: "Success",
                RoomUser: savedInRoomUsers
            }
        }
        catch(err) {
            throw new BadRequestException("Could not add user to RoomUsers Database");
        }
    }

    async removeUserFromRoomUsersFromRoomName(jwt: string, officeID: number, roomName: string): Promise<any>{
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
            await this.roomRepository.findOneOrFail({officeID, roomName});
        }
        catch(err){
            return {
                Response: "Unsuccessfull",
                Message: "No room exits with the name: " + roomName
            }
        }

        try{
            const user = await this.userService.validateUser(jwt);
            const room = await this.roomRepository.findOne({officeID, roomName});
            const removedInRoomUsers = await this.roomUserService.removeUserFromRoom(officeID, room.id, roomName, user.id, user.userName);
            return {
                Response: "Success",
                RoomUser: removedInRoomUsers
            }
        }
        catch(err) {
            throw new BadRequestException("Could not remove user to RoomUsers Database");
        }
    }

    async removeUserFromAllRooms(jwt: string): Promise<any>{
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
            const user = await this.userService.validateUser(jwt);
            return await this.roomUserService.removeUserFromAllRooms(user.id);
        }
        catch(err){
            throw new BadRequestException("Could not remove records with the given user ID.")
        }
    }

    async getRoomUsersByOfficeID(jwt: string, officeID: number): Promise<any>{
        //verify the user
        try{
            const user = await this.userService.validateUser(jwt);
        }
        catch(err){
            throw new UnauthorizedException();
        }

        interface RoomUserList{
            Room: string,
            RoomUsers: RoomUsers []
        }

        let roomUserList: RoomUserList[] = [];
        try{
            const rooms: Room [] = await this.roomRepository.find({officeID: officeID});
            for(var i = 0; i < rooms.length; i++){
                let newRoomUserItem: RoomUserList = {
                    Room: rooms[i].roomName,
                    RoomUsers: await this.roomUserService.getRoomUserByRoomID(rooms[i].id)
                }

                roomUserList.push(newRoomUserItem);

                if(i == rooms.length-1){
                    return {
                        Response: "Success",
                        RoomUserList: roomUserList
                    }
                }
            }
        }
        catch(err){
            throw new BadRequestException("Could not find records with the given office ID.")
        }
    }
}
