import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private jwtService: JwtService
        ) {}

    async getUsers(): Promise<User[]> {
        return this.usersRepository.find();
    }

    async registerUser(firstName: string, lastName: string, userName: string, email: string, password: string,): Promise<User>{
        const saltOrRounds = 10;
        const hashed_password = await bcrypt.hash(password, saltOrRounds);
        password = hashed_password;
        
        try{
            const user = await this.usersRepository.create({firstName, lastName, userName, email, password});
            const savedUser = await this.usersRepository.save(user);
            return savedUser;
        }
        catch(err) {{
            throw err;
        }}
    }

    async loginUser(email: string, password: string): Promise<any>{
        
        const user = await this.usersRepository.findOne({email});

        if (!user) {
            throw new BadRequestException('invalid credentials');
        }

        if (!await bcrypt.compare(password, user.password)) {
            throw new BadRequestException('invalid credentials');
        }

        const jwt = await this.jwtService.signAsync({id: user.id});

        return {
            response: 'Success',
            jwt: jwt
        };
    }

    async getUserDetails(jwt: string): Promise<any>{
        return this.validateUser(jwt);
    }

    async validateUser(jwt: string): Promise<any>{
        try{
            const data = await this.jwtService.verifyAsync(jwt);

            if (!data) {
                throw new UnauthorizedException();
            }

            const user = await this.usersRepository.findOne({id: data['id']});

            const {password, ...result} = user;

            return result;
        }
        catch(err) {
            throw new UnauthorizedException();
        }
    }

    async getUsernameById(id: string): Promise<any>{
        try{

            const user = await this.usersRepository.findOne({id: Number(id)});

            const {firstName, lastName, email, password, ...result} = user;

            return result;
        }
        catch(err) {
            throw new NotFoundException('User not found.');
        }
    }

}