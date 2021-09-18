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
exports.KanbanController = void 0;
const common_1 = require("@nestjs/common");
const kanban_service_1 = require("./kanban.service");
let KanbanController = class KanbanController {
    constructor(kanbanService) {
        this.kanbanService = kanbanService;
    }
    async createCard(jwt, officeID, listName, cardID, cardMessage) {
        return await this.kanbanService.createCard(jwt, officeID, listName, cardID, cardMessage);
    }
    async deleteCard(jwt, officeID, cardID) {
        return await this.kanbanService.deleteCard(jwt, officeID, cardID);
    }
    async getAllCards(jwt, officeID) {
        return await this.kanbanService.getAllCards(jwt, officeID);
    }
    async editCard(jwt, officeID, cardID, oldListName, newListName) {
        return await this.kanbanService.editCard(jwt, officeID, cardID, oldListName, newListName);
    }
    async getListName(jwt, officeID, cardID) {
        return await this.kanbanService.getListName(jwt, officeID, cardID);
    }
};
__decorate([
    common_1.Post('kanban/createCard'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __param(2, common_1.Body('listName')),
    __param(3, common_1.Body('cardID')),
    __param(4, common_1.Body('cardMessage')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, String, String]),
    __metadata("design:returntype", Promise)
], KanbanController.prototype, "createCard", null);
__decorate([
    common_1.Post('kanban/deleteCard'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __param(2, common_1.Body('cardID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], KanbanController.prototype, "deleteCard", null);
__decorate([
    common_1.Post('kanban/getAllCards'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], KanbanController.prototype, "getAllCards", null);
__decorate([
    common_1.Post('kanban/editCard'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __param(2, common_1.Body('cardID')),
    __param(3, common_1.Body('oldListName')),
    __param(4, common_1.Body('newListName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String, String, String]),
    __metadata("design:returntype", Promise)
], KanbanController.prototype, "editCard", null);
__decorate([
    common_1.Post('kanban/getListName'),
    __param(0, common_1.Body('jwt')),
    __param(1, common_1.Body('officeID')),
    __param(2, common_1.Body('cardID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], KanbanController.prototype, "getListName", null);
KanbanController = __decorate([
    common_1.Controller('api'),
    __metadata("design:paramtypes", [kanban_service_1.KanbanService])
], KanbanController);
exports.KanbanController = KanbanController;
//# sourceMappingURL=kanban.controller.js.map