import { KanbanService } from './kanban.service';
export declare class KanbanController {
    private readonly kanbanService;
    constructor(kanbanService: KanbanService);
    createCard(jwt: string, officeID: number, listName: string, cardID: string, cardMessage: string): Promise<any>;
    deleteCard(jwt: string, officeID: number, cardID: string): Promise<any>;
    getAllCards(jwt: string, officeID: number): Promise<any>;
    editCard(jwt: string, officeID: number, cardID: string, oldListName: string, newListName: string): Promise<any>;
    getListName(jwt: string, officeID: number, cardID: string): Promise<any>;
}
