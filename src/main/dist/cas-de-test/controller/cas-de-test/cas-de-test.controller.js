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
exports.CasDeTestController = void 0;
const common_1 = require("@nestjs/common");
const cas_de_test_service_1 = require("../../service/cas-de-test/cas-de-test.service");
const casDeTest_entity_1 = require("../../../typeorm/entities/testingManage/casDeTest.entity");
let CasDeTestController = class CasDeTestController {
    constructor(casDeTestServiceImpl) {
        this.casDeTestServiceImpl = casDeTestServiceImpl;
    }
    async getCasDeTest() {
        return this.casDeTestServiceImpl.getAllCasDeTest();
    }
    async getCasTestById(refcasTest) {
        return this.casDeTestServiceImpl.getCasDeTestById(refcasTest);
    }
    async createCasDeTest(casDeTest) {
        try {
            return await this.casDeTestServiceImpl.addCasDeTest(casDeTest);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Une erreur est survenue lors de l\'ajout  d\'un cas de test');
        }
    }
    async updateCasDeTest(refCasTest, casDeTest) {
        casDeTest.refCasTest = refCasTest;
        return this.casDeTestServiceImpl.updateCasDeTest(casDeTest);
    }
    async deleteCasDeTest(refCasTest) {
        await this.casDeTestServiceImpl.deleteCasDeTest(refCasTest);
    }
    async getCasVisionTest(id) {
        return this.casDeTestServiceImpl.getCasVisionTest(id);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CasDeTestController.prototype, "getCasDeTest", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CasDeTestController.prototype, "getCasTestById", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [casDeTest_entity_1.CasDeTest]),
    __metadata("design:returntype", Promise)
], CasDeTestController.prototype, "createCasDeTest", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, casDeTest_entity_1.CasDeTest]),
    __metadata("design:returntype", Promise)
], CasDeTestController.prototype, "updateCasDeTest", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CasDeTestController.prototype, "deleteCasDeTest", null);
__decorate([
    (0, common_1.Get)('visionCasTest/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CasDeTestController.prototype, "getCasVisionTest", null);
CasDeTestController = __decorate([
    (0, common_1.Controller)('casTestManager'),
    __metadata("design:paramtypes", [cas_de_test_service_1.CasDeTestService])
], CasDeTestController);
exports.CasDeTestController = CasDeTestController;
//# sourceMappingURL=cas-de-test.controller.js.map