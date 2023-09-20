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
exports.AnomalieController = void 0;
const common_1 = require("@nestjs/common");
const anomalie_service_1 = require("../../service/anomalie/anomalie.service");
const anomalie_entity_1 = require("../../../typeorm/entities/testingManage/anomalie.entity");
let AnomalieController = class AnomalieController {
    constructor(anomalieServiceImpl) {
        this.anomalieServiceImpl = anomalieServiceImpl;
    }
    async getAnomalie() {
        return this.anomalieServiceImpl.getAllAnomalie();
    }
    async getAnomalieById(refAnomalie) {
        return this.anomalieServiceImpl.getAnomalieById(refAnomalie);
    }
    async createAnomalie(anomalie) {
        try {
            return await this.anomalieServiceImpl.addAnomalie(anomalie);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Une erreur est survenue lors de l\'ajout de l\'anomalie');
        }
    }
    async updateAnomalie(refAnomalie, anomalie) {
        anomalie.refAnomalie = refAnomalie;
        return this.anomalieServiceImpl.updateAnomalie(anomalie);
    }
    async deleteAnomalie(refAnomalie) {
        await this.anomalieServiceImpl.deleteAnomalie(refAnomalie);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnomalieController.prototype, "getAnomalie", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AnomalieController.prototype, "getAnomalieById", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [anomalie_entity_1.Anomalie]),
    __metadata("design:returntype", Promise)
], AnomalieController.prototype, "createAnomalie", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, anomalie_entity_1.Anomalie]),
    __metadata("design:returntype", Promise)
], AnomalieController.prototype, "updateAnomalie", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AnomalieController.prototype, "deleteAnomalie", null);
AnomalieController = __decorate([
    (0, common_1.Controller)('anomalieManager'),
    __metadata("design:paramtypes", [anomalie_service_1.AnomalieService])
], AnomalieController);
exports.AnomalieController = AnomalieController;
//# sourceMappingURL=anomalie.controller.js.map