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
var AnomalieService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnomalieService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const anomalie_repository_1 = require("../../repository/anomalie.repository");
const anomalie_entity_1 = require("../../../typeorm/entities/testingManage/anomalie.entity");
const typeorm_2 = require("typeorm");
let AnomalieService = AnomalieService_1 = class AnomalieService {
    constructor(anomalieRepository, dataSource) {
        this.anomalieRepository = anomalieRepository;
        this.dataSource = dataSource;
        this.logger = new common_1.Logger(AnomalieService_1.name);
    }
    async getAllAnomalie() {
        try {
            this.logger.log('Fetching all anomalies...');
            return this.anomalieRepository.find();
        }
        catch (error) {
            this.logger.error('Failed to fetch anomalies.', error);
            throw error;
        }
    }
    async getAnomalieById(refAnomalie) {
        try {
            this.logger.log(`Fetching anomaly with ID ${refAnomalie}...`);
            const anomalie = await this.anomalieRepository.findOneBy({ refAnomalie });
            if (!anomalie) {
                throw new common_1.NotFoundException(`Anomalie with ID:${refAnomalie} not found`);
            }
            return anomalie;
        }
        catch (error) {
            this.logger.error(`Failed to fetch anomaly with ID ${refAnomalie}.`, error);
            throw error;
        }
    }
    async addAnomalie(anomalie) {
        try {
            this.logger.log('Adding new anomaly...');
            return this.anomalieRepository.save(anomalie);
        }
        catch (error) {
            this.logger.error('Failed to add anomaly.', error);
            throw error;
        }
    }
    async updateAnomalie(anomalie) {
        try {
            this.logger.log('Updating anomaly...');
            return this.anomalieRepository.save(anomalie);
        }
        catch (error) {
            this.logger.error('Failed to update anomaly.', error);
            throw error;
        }
    }
    async deleteAnomalie(refAnomalie) {
        try {
            this.logger.log(`Deleting anomaly with ID ${refAnomalie}...`);
            await this.anomalieRepository.delete({ refAnomalie });
        }
        catch (error) {
            this.logger.error(`Failed to delete anomaly with ID ${refAnomalie}.`, error);
            throw error;
        }
    }
};
AnomalieService = AnomalieService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(anomalie_entity_1.Anomalie)),
    __param(1, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [anomalie_repository_1.AnomalieRepository,
        typeorm_2.DataSource])
], AnomalieService);
exports.AnomalieService = AnomalieService;
//# sourceMappingURL=anomalie.service.js.map