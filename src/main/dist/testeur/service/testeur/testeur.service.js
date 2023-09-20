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
var TesteurService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TesteurService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const testeur_repository_1 = require("../../repository/testeur.repository");
const testeur_entity_1 = require("../../../typeorm/entities/testingManage/testeur.entity");
let TesteurService = TesteurService_1 = class TesteurService {
    constructor(testeurRepository) {
        this.testeurRepository = testeurRepository;
        this.logger = new common_1.Logger(TesteurService_1.name);
    }
    async getAllTesteur() {
        try {
            this.logger.log('Fetching all testeurs...');
            return this.testeurRepository.find();
        }
        catch (error) {
            this.logger.error('Failed to fetch testeurs.', error);
            throw error;
        }
    }
    async getTesteurById(idTesteur) {
        try {
            this.logger.log(`Fetching testeur with ID ${idTesteur}...`, testeur_entity_1.Testeur);
            const testeur = await this.testeurRepository.findOneBy({ idTesteur });
            if (!testeur) {
                throw new common_1.NotFoundException(`Testeur with ID:${idTesteur} not found`);
            }
            return testeur;
        }
        catch (error) {
            this.logger.error(`Failed to fetch testeur with ID ${idTesteur}.`, error);
            throw error;
        }
    }
    async addTesteur(testeur) {
        try {
            this.logger.log('Adding new testeur...', testeur);
            return this.testeurRepository.save(testeur);
        }
        catch (error) {
            this.logger.error('Failed to add testeur.', error);
            throw error;
        }
    }
    async updateTesteur(testeur) {
        try {
            this.logger.log('Updating testeur...', testeur);
            return this.testeurRepository.save(testeur);
        }
        catch (error) {
            this.logger.error('Failed to update testeur.', error);
            throw error;
        }
    }
    async deleteTesteur(idTesteur) {
        try {
            this.logger.log(`Deleting testeur with ID ${idTesteur}...`);
            await this.testeurRepository.delete({ idTesteur });
        }
        catch (error) {
            this.logger.error(`Failed to delete testeur with ID ${idTesteur}.`, error);
            throw error;
        }
    }
};
TesteurService = TesteurService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(testeur_entity_1.Testeur)),
    __metadata("design:paramtypes", [testeur_repository_1.TesteurRepository])
], TesteurService);
exports.TesteurService = TesteurService;
//# sourceMappingURL=testeur.service.js.map