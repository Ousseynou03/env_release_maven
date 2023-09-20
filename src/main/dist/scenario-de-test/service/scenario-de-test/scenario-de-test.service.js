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
var ScenarioDeTestService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenarioDeTestService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const scenarioDeTest_repository_1 = require("../../repository/scenarioDeTest.repository");
const scenarioDeTest_entity_1 = require("../../../typeorm/entities/testingManage/scenarioDeTest.entity");
const typeorm_2 = require("typeorm");
let ScenarioDeTestService = ScenarioDeTestService_1 = class ScenarioDeTestService {
    constructor(scenarioDeTestRepository, dataSource) {
        this.scenarioDeTestRepository = scenarioDeTestRepository;
        this.dataSource = dataSource;
        this.logger = new common_1.Logger(ScenarioDeTestService_1.name);
    }
    async getAllScenario() {
        try {
            this.logger.log('Fetching all scenarios...');
            return this.scenarioDeTestRepository
                .createQueryBuilder('scenario')
                .leftJoinAndSelect('scenario.casDeTest', 'casDeTest')
                .getMany();
        }
        catch (error) {
            this.logger.error('Failed to fetch scenarios.', error);
            throw error;
        }
    }
    async getScenarioDeTestById(refScenario) {
        try {
            this.logger.log(`Fetching scenario de test with ID ${refScenario}...`);
            const scenarioDeTest = await this.scenarioDeTestRepository.findOneBy({ refScenario });
            if (!scenarioDeTest) {
                throw new common_1.NotFoundException(`Scenario de test with ID:${refScenario} not found`);
            }
            return scenarioDeTest;
        }
        catch (error) {
            this.logger.error(`Failed to fetch scenario de test with ID ${refScenario}.`, error);
            throw error;
        }
    }
    async updateScenarioDeTest(scenarioDeTest) {
        try {
            this.logger.log('Updating scenario de test...', scenarioDeTest);
            return this.scenarioDeTestRepository.save(scenarioDeTest);
        }
        catch (error) {
            this.logger.error('Failed to update scenario de test.', error);
            throw error;
        }
    }
    async addScenarioDeTest(scenarioDeTest) {
        try {
            this.logger.log('Adding new scenario de test...', scenarioDeTest);
            return this.scenarioDeTestRepository.save(scenarioDeTest);
        }
        catch (error) {
            this.logger.error('Failed to add scenario de test.', error);
            throw error;
        }
    }
    async deleteScenarioDeTest(refScenario) {
        try {
            this.logger.log(`Deleting scenario de test with ID ${refScenario}...`);
            await this.scenarioDeTestRepository.delete(refScenario);
        }
        catch (error) {
            this.logger.error(`Failed to delete scenario de test with ID ${refScenario}.`, error);
            throw error;
        }
    }
    async getAllScenarioCasDeTest(id) {
        try {
            this.logger.log(`Fetching all scenarios for cas de test with ID ${id}...`);
            const results = await this.scenarioDeTestRepository
                .createQueryBuilder('scenario')
                .leftJoinAndSelect('scenario.casDeTest', 'casDeTest')
                .where('scenario.casDeTest = :id', { id })
                .getMany();
            return results.map((result) => this.scenarioDeTestRepository.create({
                refScenario: result.refScenario,
                scenario: result.scenario,
                casDeTest: result.casDeTest,
            }));
        }
        catch (error) {
            this.logger.error(`Failed to fetch scenarios for cas de test with ID ${id}.`, error);
            throw error;
        }
    }
};
ScenarioDeTestService = ScenarioDeTestService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(scenarioDeTest_entity_1.ScenarioDeTest)),
    __param(1, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [scenarioDeTest_repository_1.ScenarioDeTestRepository,
        typeorm_2.DataSource])
], ScenarioDeTestService);
exports.ScenarioDeTestService = ScenarioDeTestService;
//# sourceMappingURL=scenario-de-test.service.js.map