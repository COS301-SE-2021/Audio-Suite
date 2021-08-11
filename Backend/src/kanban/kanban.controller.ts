import { Body, Controller, Post } from '@nestjs/common';
import { KanbanService } from './kanban.service';

@Controller('api')
export class KanbanController {
    constructor(private readonly kanbanService: KanbanService){}

    //Creating a card and assigning it to a list in the kanban.
    @Post('kanban/createCard')
    async createCard(
        @Body('jwt') jwt: string,
        @Body('officeID')officeID: number, 
        @Body('listName')listName:string, 
        @Body('cardID')cardID: string, 
        @Body('cardMessage')cardMessage: string
    ){
        return await this.kanbanService.createCard(jwt, officeID, listName, cardID, cardMessage);
    }

    //Deleting a card from a list.
    @Post('kanban/createCard')
    async deleteCard(
        @Body('jwt') jwt: string,
        @Body('officeID')officeID: number,
        @Body('cardID')cardID: string
    ){
        return await this.kanbanService.deleteCard(jwt, officeID, cardID);
    }

    //Get all cards in an office,
    @Post('kanban/getAllCards')
    async getAllCards(
        @Body('jwt') jwt: string,
        @Body('officeID') officeID: number
    ){
        return await this.kanbanService.getAllCards(jwt, officeID);
    }
}
