import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('api')
export class UserController {
    constructor(private readonly userService: UserService){} 

    @Get('getallusers')
    getUser(): any{
        return this.userService.getUsers();
    }

    @Post('register')
    async registerUser(
        @Body('firstName') firstName: string,
        @Body('lastName') lastName: string,
        @Body('userName') userName: string,
        @Body('email') email: string,
        @Body('password') password: string,
    )
    {
        return await this.userService.registerUser(firstName, lastName, userName, email, password);
    }
    
    @Post('login')
    async loginUser(
        @Body('email') email: string,
        @Body('password') password: string,
    )
    {
        return await this.userService.loginUser(email, password);
    }

    @Post('user/details')
    async getUserDetails(
        @Body('jwt') jwt: string
    )
    {
        return await this.userService.getUserDetails(jwt);
    }

    @Post('user/getUsernameById')
    async getUsernameById(
        @Body('id') id: string
    )
    {
        return await this.userService.getUsernameById(id);
    }

    @Post('user/updateUsername')
    async updateUsername(
        @Body('id') id: string,
        @Body('newUsername') newUsername: string
    )
    {
        return await this.userService.updateUsername(id, newUsername);
    }

    @Post('user/updatePassword')
    async updatePassword(
        @Body('id') id: string,
        @Body('newPassword') newPassword: string
    )
    {
        return await this.userService.updatePassword(id, newPassword);
    }
}
