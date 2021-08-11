import { BadRequestException, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OfficeService } from 'src/office/office.service';
import { UserService } from 'src/user/user.service';
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
        }catch{
            throw new BadRequestException("Cannot Create Card.");
        }

    }
    
    async getAllCards(jwt: string, officeId: string) : Promise<any>{

    }
}
