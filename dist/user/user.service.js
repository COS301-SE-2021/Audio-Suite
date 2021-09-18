"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt = require("bcrypt");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UserService = class UserService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async getUsers() {
        return this.usersRepository.find();
    }
    async registerUser(firstName, lastName, userName, email, password) {
        const saltOrRounds = 10;
        const hashed_password = await bcrypt.hash(password, saltOrRounds);
        password = hashed_password;
        try {
            const user = await this.usersRepository.create({ firstName, lastName, userName, email, password });
            const savedUser = await this.usersRepository.save(user);
            return savedUser;
        }
        catch (err) {
            {
                throw new common_1.BadRequestException("User Already Exists");
            }
        }
    }
    async loginUser(email, password) {
        const user = await this.usersRepository.findOne({ email });
        if (!user) {
            throw new common_1.BadRequestException('invalid credentials');
        }
        if (!await bcrypt.compare(password, user.password)) {
            throw new common_1.BadRequestException('invalid credentials');
        }
        const jwt = await this.jwtService.signAsync({ id: user.id });
        return {
            response: 'Success',
            jwt: jwt
        };
    }
    async getUserDetails(jwt) {
        return this.validateUser(jwt);
    }
    async validateUser(jwt) {
        try {
            const data = await this.jwtService.verifyAsync(jwt);
            if (!data) {
                throw new common_1.UnauthorizedException();
            }
            const user = await this.usersRepository.findOne({ id: data['id'] });
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
    }
    async getUsernameById(id) {
        try {
            const user = await this.usersRepository.findOne({ id: Number(id) });
            const { firstName, lastName, email, password } = user, result = __rest(user, ["firstName", "lastName", "email", "password"]);
            return result;
        }
        catch (err) {
            throw new common_1.NotFoundException('User not found.');
        }
    }
    async updateUsername(jwt, id, newUsername) {
        try {
            const user = await this.usersRepository.findOne({ id: Number(id) });
            user.userName = newUsername;
            await this.usersRepository.save(user);
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        catch (err) {
            throw new common_1.NotFoundException('User Not Found.');
        }
    }
    async updateEmail(jwt, id, newEmail) {
        try {
            const user = await this.usersRepository.findOne({ id: Number(id) });
            user.email = newEmail;
            await this.usersRepository.save(user);
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        catch (err) {
            throw new common_1.NotFoundException('User Not Found.');
        }
    }
    async updatePassword(jwt, id, newPassword) {
        try {
            const user = await this.usersRepository.findOne({ id: Number(id) });
            const saltOrRounds = 10;
            const hashed_password = await bcrypt.hash(newPassword, saltOrRounds);
            newPassword = hashed_password;
            user.password = newPassword;
            await this.usersRepository.save(user);
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        catch (err) {
            throw new common_1.NotFoundException('User Not Found.');
        }
    }
    async deleteUser(jwt, id) {
        try {
            const user = await this.usersRepository.findOne({ id: Number(id) });
            await this.usersRepository.delete(user);
            return {
                response: 'Success',
                jwt: jwt
            };
        }
        catch (err) {
            throw new common_1.NotFoundException('User Not Found.');
        }
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map