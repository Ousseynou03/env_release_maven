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
exports.ReleasController = void 0;
const common_1 = require("@nestjs/common");
const releas_service_1 = require("../../service/releas/releas.service");
const releas_entity_1 = require("../../../typeorm/entities/testingManage/releas.entity");
let ReleasController = class ReleasController {
    constructor(releasServiceImpl) {
        this.releasServiceImpl = releasServiceImpl;
    }
    async getRelease() {
        return this.releasServiceImpl.getAllRelease();
    }
    async getReleasById(refRelease) {
        return this.releasServiceImpl.getReleasById(refRelease);
    }
    async createReleas(releas) {
        try {
            return await this.releasServiceImpl.addReleas(releas);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Une erreur est survenue lors de l\'ajout d\'une release');
        }
    }
    async updateReleas(refRelease, releas) {
        releas.refRelease = refRelease;
        return this.releasServiceImpl.updateReleas(releas);
    }
    async deleteRelease(refReleas) {
        await this.releasServiceImpl.deleteReleas(refReleas);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReleasController.prototype, "getRelease", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReleasController.prototype, "getReleasById", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [releas_entity_1.Releas]),
    __metadata("design:returntype", Promise)
], ReleasController.prototype, "createReleas", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, releas_entity_1.Releas]),
    __metadata("design:returntype", Promise)
], ReleasController.prototype, "updateReleas", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ReleasController.prototype, "deleteRelease", null);
ReleasController = __decorate([
    (0, common_1.Controller)('releaseManager'),
    __metadata("design:paramtypes", [releas_service_1.ReleasService])
], ReleasController);
exports.ReleasController = ReleasController;
//# sourceMappingURL=releas.controller.js.map