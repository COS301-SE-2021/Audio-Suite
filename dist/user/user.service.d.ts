import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    getUsers(): Promise<User[]>;
    registerUser(firstName: string, lastName: string, userName: string, email: string, password: string): Promise<User>;
    loginUser(email: string, password: string): Promise<any>;
    getUserDetails(jwt: string): Promise<any>;
    validateUser(jwt: string): Promise<any>;
    getUsernameById(id: string): Promise<any>;
    updateUsername(jwt: string, id: string, newUsername: string): Promise<any>;
    updateEmail(jwt: string, id: string, newEmail: string): Promise<any>;
    updatePassword(jwt: string, id: string, newPassword: string): Promise<any>;
    deleteUser(jwt: string, id: string): Promise<any>;
}
