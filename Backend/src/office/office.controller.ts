import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { OfficeService } from './office.service';

@Controller('api')
export class OfficeController {
    constructor(private readonly officeService: OfficeService){}

    @Get()
    getOffice(): String{
        return this.officeService.getOffice();
    }

    @Get('office/invite?')
    async addUserByInvite(
        @Query('id') id: string,
        @Query('token') jwt: string
    ){
        return await this.officeService.joinUserToOffice(id,jwt)
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
        return await this.officeService.joinUserToOffice(invite, jwt);
    }

    @Post('office/getUserOffices')
    async getUserOffices(
        @Body('jwt') jwt: string
    )
    {
        return await this.officeService.getOfficeIdFromUserId(jwt);
    }
}
