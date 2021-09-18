import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUser(): any;
    registerUser(firstName: string, lastName: string, userName: string, email: string, password: string): Promise<import("./user.entity").User>;
    loginUser(email: string, password: string): Promise<any>;
    getUserDetails(jwt: string): Promise<any>;
    getUsernameById(id: string): Promise<any>;
    updateUsername(jwt: string, id: string, newUsername: string): Promise<any>;
    updateEmail(jwt: string, id: string, newEmail: string): Promise<any>;
    updatePassword(jwt: string, id: string, newPassword: string): Promise<any>;
    deleteUser(jwt: string, id: string): Promise<any>;
}
