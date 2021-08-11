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
}
