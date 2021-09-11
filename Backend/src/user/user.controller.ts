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
        @Body('jwt') jwt: string,
        @Body('id') id: string,
        @Body('newUsername') newUsername: string
    )
    {
        return await this.userService.updateUsername(jwt, id, newUsername);
    }

    @Post('user/updateEmail')
    async updateEmail(
        @Body('jwt') jwt: string,
        @Body('id') id: string,
        @Body('newEmail') newEmail: string
    )
    {
        return await this.userService.updateEmail(jwt, id, newEmail);
    }

    @Post('user/updatePassword')
    async updatePassword(
        @Body('jwt') jwt: string,
        @Body('id') id: string,
        @Body('newPassword') newPassword: string
    )
    {
        return await this.userService.updatePassword(jwt, id, newPassword);
    }

    @Post('user/deleteUser')
    async deleteUser(
        @Body('jwt') jwt: string,
        @Body('id') id: string,
    )
    {
        return await this.userService.deleteUser(jwt, id);
    }
}
