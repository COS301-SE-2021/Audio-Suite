import { Body, Controller, Get, Post } from '@nestjs/common';
import { OfficeService } from './office.service';

@Controller('api')
export class OfficeController {
    constructor(private readonly officeService: OfficeService){}

    @Get()
    getOffice(): String{
        return this.officeService.getOffice();
    }

    @Post('office/register')
    async registerOffice(
        @Body('name') name: string,
        @Body('jwt') jwt: string
    )
    {
        return await this.officeService.registerOffice(name, jwt);
    }

    @Post('office/joinInvite')
    async joinUserToOffice(
        @Body('invite') invite: string,
        @Body('jwt') jwt: string
    )
    {
        return await this.officeService.registerOffice(invite, jwt);
    }
}
