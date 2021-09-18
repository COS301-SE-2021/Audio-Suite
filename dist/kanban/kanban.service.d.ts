import { OfficeService } from '../office/office.service';
import { UserService } from '../user/user.service';
import { Repository } from 'typeorm';
import { Kanban } from './kanban.entity';
export declare class KanbanService {
    private kanbanRepository;
    private userService;
    private officeService;
    constructor(kanbanRepository: Repository<Kanban>, userService: UserService, officeService: OfficeService);
    createCard(jwt: string, officeID: number, listName: string, cardID: string, cardMessage: string): Promise<any>;
    deleteCard(jwt: string, officeID: number, cardID: string): Promise<any>;
    getAllCards(jwt: string, officeID: number): Promise<any>;
    editCard(jwt: string, officeID: number, cardID: string, oldListName: string, newListName: string): Promise<any>;
    getListName(jwt: string, officeID: number, cardID: string): Promise<any>;
}
