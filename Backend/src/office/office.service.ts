import { Injectable } from '@nestjs/common';
import { randomUUID } from "crypto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Office } from './office.entity';

@Injectable()
export class OfficeService {
    constructor(
        @InjectRepository(Office)
        private officesRepository: Repository<Office>,
        ) {}

    getOffice(): string {
        return 'Hello World, Office!';
    }

    async registerOffice(name: string): Promise<Office>{
        const invite = randomUUID();
        try{
            const office = await this.officesRepository.create({name, invite});
            const savedOffice = await this.officesRepository.save(office);
            return savedOffice;
        }
        catch(err) {{
            throw err;
        }}
    }
}