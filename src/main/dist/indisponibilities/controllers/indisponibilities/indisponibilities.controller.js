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
exports.IndisponibilitiesController = void 0;
const common_1 = require("@nestjs/common");
const CreateIndisponibility_dto_1 = require("../../dtos/CreateIndisponibility.dto");
const UpdateIndisponibility_dto_1 = require("../../dtos/UpdateIndisponibility.dto");
const indisponibilities_service_1 = require("../../services/indisponibilities/indisponibilities.service");
let IndisponibilitiesController = class IndisponibilitiesController {
    constructor(indisponibilityService) {
        this.indisponibilityService = indisponibilityService;
    }
    getindIsponibilities() {
        return this.indisponibilityService.findIndisponibilities();
    }
    createIndisponibility(createIndisponibilityDto) {
        return this.indisponibilityService.createIndisponibilities(createIndisponibilityDto);
    }
    async updateIndisponibilityById(id, updateIndisponibilityDto) {
        await this.indisponibilityService.updateIndisponibilities(id, updateIndisponibilityDto);
    }
    async deleteIndisponibilityById(id) {
        await this.indisponibilityService.deleteIndisponibility(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], IndisponibilitiesController.prototype, "getindIsponibilities", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateIndisponibility_dto_1.CreateIndisponibilityDto]),
    __metadata("design:returntype", void 0)
], IndisponibilitiesController.prototype, "createIndisponibility", null);
__decorate([
    (0, common_1.Put)(':id/update'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateIndisponibility_dto_1.UpdateIndisponibilityDto]),
    __metadata("design:returntype", Promise)
], IndisponibilitiesController.prototype, "updateIndisponibilityById", null);
__decorate([
    (0, common_1.Delete)(':id/delete'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], IndisponibilitiesController.prototype, "deleteIndisponibilityById", null);
IndisponibilitiesController = __decorate([
    (0, common_1.Controller)('api/indisponibilities'),
    __metadata("design:paramtypes", [indisponibilities_service_1.IndisponibilitiesService])
], IndisponibilitiesController);
exports.IndisponibilitiesController = IndisponibilitiesController;
//# sourceMappingURL=indisponibilities.controller.js.map