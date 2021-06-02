import { Body, Controller, Get, Post } from '@nestjs/common';
import { OfficeService } from './office.service';

@Controller('office')
export class OfficeController {
    constructor(private readonly officeService: OfficeService){}

    @Get()
    getOffice(): String{
        return this.officeService.getOffice();
    }

    @Post('register')
    async registerOffice(
        @Body('name') name: string
    )
    {
        return await this.officeService.registerOffice(name);
    }
}
