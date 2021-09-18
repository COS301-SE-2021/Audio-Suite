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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    getUser() {
        return this.userService.getUsers();
    }
    async registerUser(firstName, lastName, userName, email, password) {
        return await this.userService.registerUser(firstName, lastName, userName, email, password);
    }
    async loginUser(email, password) {
        return await this.userService.loginUser(email, password);
    }
    async getUserDetails(jwt) {
        return await this.userService.getUserDetails(jwt);
    }
    async getUsernameById(id) {
        return await this.userService.getUsernameById(id);
    }
    async updateUsername(jwt, id, newUsername) {
        return await this.userService.updateUsername(jwt, id, newUsername);
    }
    async updateEmail(jwt, id, newEmail) {
        return await this.userService.updateEmail(jwt, id, newEmail);
    }
    async updatePassword(jwt, id, newPassword) {
        return await this.userService.updatePassword(jwt, id, newPassword);
    }
    async deleteUser(jwt, id) {
        return await this.userService.deleteUser(jwt, id);
    }
};
__decorate([
    common_1.Get('getallusers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], UserController.prototype, "getUser", null);
__decorate([
    common_1.Post('register'),
    __param(0, common_1.Body('firstName')),
    __param(1, common_1.Body('lastName')),
    __param(2, common_1.Body('userName')),
    __param(3, common_1.Body('email')),
    __param(4, common_1.Body('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "registerUser", null);
__decorate([
    common_1.Post('login'),
    __param(0, common_1.Body('email')),
    __param(1, common_1.Body('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "loginUser", null);
__decorate([
    common_1.Post('user/details'),
    __param(0, common_1.Body('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserDetails", null);
__decorate([
    common_1.Post('user/getUsernameById'),
    __param(0, common_1.Body('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUsernameById", null);
__decorate([
    common_1.Post('user/updateUsername'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('id')),
    __param(2, common_1.Body('newUsername')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUsername", null);
__decorate([
    common_1.Post('user/updateEmail'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('id')),
    __param(2, common_1.Body('newEmail')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateEmail", null);
__decorate([
    common_1.Post('user/updatePassword'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('id')),
    __param(2, common_1.Body('newPassword')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updatePassword", null);
__decorate([
    common_1.Post('user/deleteUser'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "deleteUser", null);
UserController = __decorate([
    common_1.Controller('api'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map