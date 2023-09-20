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
exports.ScenarioDeTestController = void 0;
const common_1 = require("@nestjs/common");
const scenario_de_test_service_1 = require("../../service/scenario-de-test/scenario-de-test.service");
const scenarioDeTest_entity_1 = require("../../../typeorm/entities/testingManage/scenarioDeTest.entity");
let ScenarioDeTestController = class ScenarioDeTestController {
    constructor(scenarioDeTestServiceImpl) {
        this.scenarioDeTestServiceImpl = scenarioDeTestServiceImpl;
    }
    async getScenario() {
        return this.scenarioDeTestServiceImpl.getAllScenario();
    }
    async getScenarioDeTestById(refScenario) {
        return this.scenarioDeTestServiceImpl.getScenarioDeTestById(refScenario);
    }
    async createSceanrioDeTest(scenarioDeTest) {
        try {
            return await this.scenarioDeTestServiceImpl.addScenarioDeTest(scenarioDeTest);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Une erreur est survenue lors de l\'ajout d\'un scenario de test');
        }
    }
    async updateScenarioDeTest(refScenario, scenarioDeTest) {
        scenarioDeTest.refScenario = refScenario;
        return this.scenarioDeTestServiceImpl.updateScenarioDeTest(scenarioDeTest);
    }
    async deleteScenario(refScenario) {
        await this.scenarioDeTestServiceImpl.deleteScenarioDeTest(refScenario);
    }
    async getScenarioTestForCasTest(id) {
        return this.scenarioDeTestServiceImpl.getAllScenarioCasDeTest(id);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScenarioDeTestController.prototype, "getScenario", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ScenarioDeTestController.prototype, "getScenarioDeTestById", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [scenarioDeTest_entity_1.ScenarioDeTest]),
    __metadata("design:returntype", Promise)
], ScenarioDeTestController.prototype, "createSceanrioDeTest", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, scenarioDeTest_entity_1.ScenarioDeTest]),
    __metadata("design:returntype", Promise)
], ScenarioDeTestController.prototype, "updateScenarioDeTest", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ScenarioDeTestController.prototype, "deleteScenario", null);
__decorate([
    (0, common_1.Get)('casTest/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ScenarioDeTestController.prototype, "getScenarioTestForCasTest", null);
ScenarioDeTestController = __decorate([
    (0, common_1.Controller)('scenarioManager'),
    __metadata("design:paramtypes", [scenario_de_test_service_1.ScenarioDeTestService])
], ScenarioDeTestController);
exports.ScenarioDeTestController = ScenarioDeTestController;
//# sourceMappingURL=scenario-de-test.controller.js.map