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
var CasDeTestService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasDeTestService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const casDeTest_repository_1 = require("../../repository/casDeTest.repository");
const casDeTest_entity_1 = require("../../../typeorm/entities/testingManage/casDeTest.entity");
const typeorm_2 = require("typeorm");
let CasDeTestService = CasDeTestService_1 = class CasDeTestService {
    constructor(casDeTestRepository, dataSource) {
        this.casDeTestRepository = casDeTestRepository;
        this.dataSource = dataSource;
        this.logger = new common_1.Logger(CasDeTestService_1.name);
    }
    async getAllCasDeTest() {
        return this.casDeTestRepository.find();
    }
    async getCasDeTestById(refCasTest) {
        try {
            this.logger.log(`Fetching cas de test with ID ${refCasTest}...`);
            const casDeTest = await this.casDeTestRepository.findOneBy({ refCasTest });
            if (!casDeTest) {
                throw new common_1.NotFoundException(`Cas de test with ID:${refCasTest} not found`);
            }
            return casDeTest;
        }
        catch (error) {
            this.logger.error(`Failed to fetch cas de test with ID ${refCasTest}.`, error);
            throw error;
        }
    }
    async addCasDeTest(casDeTest) {
        return this.casDeTestRepository.save(casDeTest);
    }
    async updateCasDeTest(casDeTest) {
        return this.casDeTestRepository.save(casDeTest);
    }
    async deleteCasDeTest(refCasTest) {
        await this.casDeTestRepository.delete({ refCasTest });
    }
    async getCasVisionTest(id) {
        const result = await this.dataSource.query(`
        SELECT
        (SELECT COUNT(*) FROM cas_de_test c, ticket t WHERE c.ref_cas_test=t.cas_de_test_ref_cas_test and t.release_ref_release=${id}) as CasDeTesTotal,
        (SELECT COUNT(*) FROM ticket WHERE ticket.cas_de_test_ref_cas_test IS NOT NULL ) as CasDeTestLieTicket,
        (SELECT COUNT(*) FROM cas_de_test c, ticket t WHERE c.ref_cas_test=t.cas_de_test_ref_cas_test and c.resultat="OK" and t.release_ref_release=${id}) as CasDeTesOK,
        (SELECT COUNT(*) FROM cas_de_test c, ticket t WHERE c.ref_cas_test=t.cas_de_test_ref_cas_test and c.resultat="KO" and t.release_ref_release=${id}) as CasDeTesKO,
        (SELECT COUNT(*) FROM cas_de_test c, ticket t WHERE c.ref_cas_test=t.cas_de_test_ref_cas_test and c.resultat="Bloquee" and t.release_ref_release=${id}) as CasDeTesBloquee,
        (SELECT COUNT(*) FROM cas_de_test c, ticket t WHERE c.ref_cas_test=t.cas_de_test_ref_cas_test and c.resultat="Non_Teste" and t.release_ref_release=${id}) as CasDeTesNonTeste,
        (SELECT COUNT(*) FROM cas_de_test c, ticket t WHERE c.ref_cas_test=t.cas_de_test_ref_cas_test and c.resultat="Hors_Perimetre" and t.release_ref_release=${id}) as CasDeTesHorsPerimetre;
        `);
        return Object.values(result[0]).map(Number);
    }
};
CasDeTestService = CasDeTestService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(casDeTest_entity_1.CasDeTest)),
    __param(1, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [casDeTest_repository_1.CasDeTestRepository,
        typeorm_2.DataSource])
], CasDeTestService);
exports.CasDeTestService = CasDeTestService;
//# sourceMappingURL=cas-de-test.service.js.map