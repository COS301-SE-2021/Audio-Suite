import { BadRequestException, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OfficeService } from '../office/office.service';
import { UserService } from '../user/user.service';
import { Repository } from 'typeorm';
import { Kanban } from './kanban.entity';

@Injectable()
export class KanbanService {
    constructor(
        @InjectRepository(Kanban)
        private kanbanRepository: Repository<Kanban>,
        private userService: UserService,
        private officeService: OfficeService
    ){}

    async createCard(jwt: string, officeID: number, listName:string, cardID: string, cardMessage: string) : Promise<any>{
        //verify the office -> this includes verifying the user.
        try{
            const office = this.officeService.getOfficeFromOfficeID(jwt, officeID);
        }catch{
            throw new UnauthorizedException();
        }

        try{
            const card = await this.kanbanRepository.create({officeID, listName, cardID, cardMessage});
            const savedCard = await this.kanbanRepository.save(card);
            return{
                Response: "Success",
                Card: savedCard
            };
        }catch(err){
            throw new BadRequestException("Cannot Create Card.");
        }

    }

    async deleteCard(jwt: string, officeID: number, cardID:string) : Promise<any>{
        //verify the office -> this includes verifying the user.
        try{
            const office = this.officeService.getOfficeFromOfficeID(jwt, officeID);
        }catch(err){
            throw new UnauthorizedException();
        }

        try{
            const card = await this.kanbanRepository.findOne({where: {officeID:officeID, cardID:cardID}});
            const removedCard = await this.kanbanRepository.remove(card);
            return{
                Response: "Success",
                RemovedCard: removedCard
            }
        }
        catch(err) {
            throw new HttpException("Could not remove card from list.", 400);
        }
    }

    async getAllCards(jwt: string, officeID: number) : Promise<any>{
        //verify the office -> this includes verifying the user.
        try{
            const office = this.officeService.getOfficeFromOfficeID(jwt, officeID);
        }catch(err){
            throw new UnauthorizedException();
        }

        try{
            const cards: Kanban[] = await this.kanbanRepository.find({where:{officeID:officeID}});
            return {
                Response: "Success",
                Cards: cards
            };

        }catch(err){
            throw new BadRequestException();
        }
    }

    async editCard(jwt: string, officeID: number, cardID:string, oldListName:string, newListName: string): Promise<any>{
        //verify the office -> this includes verifying the user.
        try{
            const office = this.officeService.getOfficeFromOfficeID(jwt, officeID);
        }catch(err){
            throw new UnauthorizedException();
        }

        try{
            const card = await this.kanbanRepository.findOne({officeID: officeID, cardID: cardID,listName: oldListName});
            card.listName = newListName;
            await this.kanbanRepository.save(card);
            return {
                Response: "Success",
                Card: card
            };

        }catch(err){
            throw new BadRequestException();
        }
    }

    async getListName(jwt: string, officeID: number, cardID:string): Promise<any>{
        //verify the office -> this includes verifying the user.
        try{
            const office = this.officeService.getOfficeFromOfficeID(jwt, officeID);
        }catch(err){
            throw new UnauthorizedException();
        }

        try{
            const card = await this.kanbanRepository.findOne({officeID: officeID, cardID: cardID});
            return {
                Response: "Success",
                listName: card.listName
            };

        }catch(err){
            throw new BadRequestException();
        }
    }

    //TODO: getAllCards -> this is office exclusive
    //Also, include the author of a message in entity so we can make use of it on the frontend.
}
