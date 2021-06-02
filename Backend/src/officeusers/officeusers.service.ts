import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OfficeUsers } from './officeusers.entity';

@Injectable()
export class OfficeusersService {
    constructor(
        @InjectRepository(OfficeUsers)
        private officeUsersRepository: Repository<OfficeUsers>,
        ) {}

    // TODO add services to add office and user
}
