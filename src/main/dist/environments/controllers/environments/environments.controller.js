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
exports.EnvironmentsController = void 0;
const common_1 = require("@nestjs/common");
const environments_service_1 = require("../../services/environments/environments.service");
const CreateCartographieDitw_dto_1 = require("../../dtos/CreateCartographieDitw.dto");
const UpdateCartographieDitw_dto_1 = require("../../dtos/UpdateCartographieDitw.dto");
const CreateFusionDatapfProgiciel_dto_1 = require("../../dtos/CreateFusionDatapfProgiciel.dto");
const UpdateFusionDatapfProgiciel_dto_1 = require("../../dtos/UpdateFusionDatapfProgiciel.dto");
let EnvironmentsController = class EnvironmentsController {
    constructor(environmentService) {
        this.environmentService = environmentService;
    }
    getFusionDatapfProgiciels() {
        return this.environmentService.findFusionDatapfProgiciels();
    }
    getCartographieDitws() {
        return this.environmentService.findCartographieDitws();
    }
    createFusionDatapfProgiciel(createFusionDatapfProgicielDto) {
        return this.environmentService.createFusionDatapfProgiciel(createFusionDatapfProgicielDto);
    }
    createCartographieDitw(createCartographieDitwDto) {
        return this.environmentService.createCartographieDitw(createCartographieDitwDto);
    }
    async updateFusionDatapfProgicielById(id, updateFusionDatapfProgicielDto) {
        await this.environmentService.updateFusionDatapfProgiciel(id, updateFusionDatapfProgicielDto);
    }
    async updateCartographieDitwById(id, updateCartographieDitwDto) {
        await this.environmentService.updateCartographieDitw(id, updateCartographieDitwDto);
    }
    async deleteFusionDatapfProgicielById(id) {
        await this.environmentService.deleteFusionDatapfProgiciel(id);
    }
    async deleteCartographieDitwById(id) {
        await this.environmentService.deleteCartographieDitw(id);
    }
};
__decorate([
    (0, common_1.Get)('fusionDatapfProgiciels'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EnvironmentsController.prototype, "getFusionDatapfProgiciels", null);
__decorate([
    (0, common_1.Get)('cartographieDitws'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EnvironmentsController.prototype, "getCartographieDitws", null);
__decorate([
    (0, common_1.Post)('fusionDatapfProgiciel/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateFusionDatapfProgiciel_dto_1.CreateFusionDatapfProgicielDto]),
    __metadata("design:returntype", void 0)
], EnvironmentsController.prototype, "createFusionDatapfProgiciel", null);
__decorate([
    (0, common_1.Post)('cartographieDitw/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateCartographieDitw_dto_1.CreateCartographieDitwDto]),
    __metadata("design:returntype", void 0)
], EnvironmentsController.prototype, "createCartographieDitw", null);
__decorate([
    (0, common_1.Put)(':id/fusionDatapfProgiciel/update'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateFusionDatapfProgiciel_dto_1.UpdateFusionDatapfProgicielDto]),
    __metadata("design:returntype", Promise)
], EnvironmentsController.prototype, "updateFusionDatapfProgicielById", null);
__decorate([
    (0, common_1.Put)(':id/cartographieDitw/update'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdateCartographieDitw_dto_1.UpdateCartographieDitwDto]),
    __metadata("design:returntype", Promise)
], EnvironmentsController.prototype, "updateCartographieDitwById", null);
__decorate([
    (0, common_1.Delete)(':id/fusionDatapfProgiciel/delete'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EnvironmentsController.prototype, "deleteFusionDatapfProgicielById", null);
__decorate([
    (0, common_1.Delete)(':id/cartographieDitw/delete'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EnvironmentsController.prototype, "deleteCartographieDitwById", null);
EnvironmentsController = __decorate([
    (0, common_1.Controller)('api/environments/'),
    __metadata("design:paramtypes", [environments_service_1.EnvironmentsService])
], EnvironmentsController);
exports.EnvironmentsController = EnvironmentsController;
//# sourceMappingURL=environments.controller.js.map