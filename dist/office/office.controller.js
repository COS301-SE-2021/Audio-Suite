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
exports.OfficeController = void 0;
const common_1 = require("@nestjs/common");
const office_service_1 = require("./office.service");
let OfficeController = class OfficeController {
    constructor(officeService) {
        this.officeService = officeService;
    }
    getOffice() {
        return this.officeService.getOffice();
    }
    async addUserByInvite(id, jwt) {
        return await this.officeService.joinUserToOffice(id, jwt);
    }
    async registerOffice(name, jwt) {
        return await this.officeService.registerOffice(name, jwt);
    }
    async joinUserToOffice(invite, jwt) {
        return await this.officeService.joinUserToOffice(invite, jwt);
    }
    async getUserOffices(jwt) {
        return await this.officeService.getOfficeIdFromUserId(jwt);
    }
    async getOfficeFromOfficeID(jwt, officeID) {
        return await this.officeService.getOfficeFromOfficeID(jwt, officeID);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], OfficeController.prototype, "getOffice", null);
__decorate([
    common_1.Get('office/invite?'),
    __param(0, common_1.Query('id')),
    __param(1, common_1.Query('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], OfficeController.prototype, "addUserByInvite", null);
__decorate([
    common_1.Post('office/register'),
    __param(0, common_1.Body('name')),
    __param(1, common_1.Body('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], OfficeController.prototype, "registerOffice", null);
__decorate([
    common_1.Post('office/joinInvite'),
    __param(0, common_1.Body('invite')),
    __param(1, common_1.Body('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], OfficeController.prototype, "joinUserToOffice", null);
__decorate([
    common_1.Post('office/getUserOffices'),
    __param(0, common_1.Body('jwt')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OfficeController.prototype, "getUserOffices", null);
__decorate([
    common_1.Post('office/officeFromOfficeID'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], OfficeController.prototype, "getOfficeFromOfficeID", null);
OfficeController = __decorate([
    common_1.Controller('api'),
    __metadata("design:paramtypes", [office_service_1.OfficeService])
], OfficeController);
exports.OfficeController = OfficeController;
//# sourceMappingURL=office.controller.js.map