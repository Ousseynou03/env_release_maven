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
exports.TicketController = void 0;
const common_1 = require("@nestjs/common");
const ticket_service_1 = require("../../service/ticket/ticket.service");
const ticket_entity_1 = require("../../../typeorm/entities/testingManage/ticket.entity");
let TicketController = class TicketController {
    constructor(ticketServiceImpl) {
        this.ticketServiceImpl = ticketServiceImpl;
    }
    async getTicket() {
        return this.ticketServiceImpl.getAllTicket();
    }
    async getTicketById(refTicket) {
        return this.ticketServiceImpl.getTicketById(refTicket);
    }
    async createTicket(ticket) {
        try {
            return await this.ticketServiceImpl.addTicket(ticket);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Une erreur est survenue lors de l\'ajout d\'un ticket');
        }
    }
    async updateTicket(refTicket, ticket) {
        ticket.refTicket = refTicket;
        return this.ticketServiceImpl.updateTicket(ticket);
    }
    async deleteTicket(refTicket) {
        await this.ticketServiceImpl.deleteTicket(refTicket);
    }
    async getAllTicketRelease(id) {
        return this.ticketServiceImpl.AllTicketRelease(id);
    }
    async getVisionTicket(id) {
        return await this.ticketServiceImpl.visonTicket(id);
    }
    async getVisionBloquante(id) {
        return this.ticketServiceImpl.visionAnomalieBloquant(id);
    }
    async getVisionMajeure(id) {
        return this.ticketServiceImpl.visionAnomalieMajeure(id);
    }
    async getVisionMineure(id) {
        return this.ticketServiceImpl.visionAnomalieMineure(id);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "getTicket", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "getTicketById", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ticket_entity_1.Ticket]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "createTicket", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, ticket_entity_1.Ticket]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "updateTicket", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "deleteTicket", null);
__decorate([
    (0, common_1.Get)('ticketRelease/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "getAllTicketRelease", null);
__decorate([
    (0, common_1.Get)('visionsTicket/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "getVisionTicket", null);
__decorate([
    (0, common_1.Get)('visionsBloquante/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "getVisionBloquante", null);
__decorate([
    (0, common_1.Get)('visionsMajeure/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "getVisionMajeure", null);
__decorate([
    (0, common_1.Get)('visionsMineure/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "getVisionMineure", null);
TicketController = __decorate([
    (0, common_1.Controller)('ticketManager'),
    __metadata("design:paramtypes", [ticket_service_1.TicketService])
], TicketController);
exports.TicketController = TicketController;
//# sourceMappingURL=ticket.controller.js.map