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
exports.KanbanService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const office_service_1 = require("../office/office.service");
const user_service_1 = require("../user/user.service");
const typeorm_2 = require("typeorm");
const kanban_entity_1 = require("./kanban.entity");
let KanbanService = class KanbanService {
    constructor(kanbanRepository, userService, officeService) {
        this.kanbanRepository = kanbanRepository;
        this.userService = userService;
        this.officeService = officeService;
    }
    async createCard(jwt, officeID, listName, cardID, cardMessage) {
        try {
            const office = this.officeService.getOfficeFromOfficeID(jwt, officeID);
        }
        catch (_a) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const card = await this.kanbanRepository.create({ officeID, listName, cardID, cardMessage });
            const savedCard = await this.kanbanRepository.save(card);
            return {
                Response: "Success",
                Card: savedCard
            };
        }
        catch (err) {
            throw new common_1.BadRequestException("Cannot Create Card.");
        }
    }
    async deleteCard(jwt, officeID, cardID) {
        try {
            const office = this.officeService.getOfficeFromOfficeID(jwt, officeID);
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const card = await this.kanbanRepository.findOne({ where: { officeID: officeID, cardID: cardID } });
            const removedCard = await this.kanbanRepository.remove(card);
            return {
                Response: "Success",
                RemovedCard: removedCard
            };
        }
        catch (err) {
            throw new common_1.HttpException("Could not remove card from list.", 400);
        }
    }
    async getAllCards(jwt, officeID) {
        try {
            const office = this.officeService.getOfficeFromOfficeID(jwt, officeID);
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const cards = await this.kanbanRepository.find({ where: { officeID: officeID } });
            return {
                Response: "Success",
                Cards: cards
            };
        }
        catch (err) {
            throw new common_1.BadRequestException();
        }
    }
    async editCard(jwt, officeID, cardID, oldListName, newListName) {
        try {
            const office = this.officeService.getOfficeFromOfficeID(jwt, officeID);
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const card = await this.kanbanRepository.findOne({ officeID: officeID, cardID: cardID, listName: oldListName });
            card.listName = newListName;
            await this.kanbanRepository.save(card);
            return {
                Response: "Success",
                Card: card
            };
        }
        catch (err) {
            throw new common_1.BadRequestException();
        }
    }
    async getListName(jwt, officeID, cardID) {
        try {
            const office = this.officeService.getOfficeFromOfficeID(jwt, officeID);
        }
        catch (err) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const card = await this.kanbanRepository.findOne({ officeID: officeID, cardID: cardID });
            return {
                Response: "Success",
                listName: card.listName
            };
        }
        catch (err) {
            throw new common_1.BadRequestException();
        }
    }
};
KanbanService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(kanban_entity_1.Kanban)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService,
        office_service_1.OfficeService])
], KanbanService);
exports.KanbanService = KanbanService;
//# sourceMappingURL=kanban.service.js.map