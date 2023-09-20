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
var ReleasService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const releas_repository_1 = require("../../repository/releas.repository");
const releas_entity_1 = require("../../../typeorm/entities/testingManage/releas.entity");
const typeorm_2 = require("typeorm");
let ReleasService = ReleasService_1 = class ReleasService {
    constructor(releasRepository, dataSource) {
        this.releasRepository = releasRepository;
        this.dataSource = dataSource;
        this.logger = new common_1.Logger(ReleasService_1.name);
    }
    async getAllRelease() {
        try {
            this.logger.log('Fetching all releases...');
            return this.releasRepository.find({ relations: { tickets: true } });
        }
        catch (error) {
            this.logger.error('Failed to fetch releases.', error);
            throw error;
        }
    }
    async getReleasById(refRelease) {
        try {
            this.logger.log(`Fetching release with ID ${refRelease}...`);
            const releas = await this.releasRepository.findOne({ where: { refRelease }, relations: { tickets: true } });
            if (!releas) {
                throw new common_1.NotFoundException(`Release with ID:${refRelease} not found`);
            }
            return releas;
        }
        catch (error) {
            this.logger.error(`Failed to fetch release with ID ${refRelease}.`, error);
            throw error;
        }
    }
    async addReleas(releas) {
        try {
            this.logger.log('Adding new release...', releas);
            return this.releasRepository.save(releas);
        }
        catch (error) {
            this.logger.error('Failed to add release.', error);
            throw error;
        }
    }
    async updateReleas(releas) {
        try {
            this.logger.log('Updating release...', releas);
            return this.releasRepository.save(releas);
        }
        catch (error) {
            this.logger.error('Failed to update release.', error);
            throw error;
        }
    }
    async deleteReleas(refRelease) {
        try {
            this.logger.log(`Deleting release with ID ${refRelease}...`);
            await this.releasRepository.delete({ refRelease });
        }
        catch (error) {
            this.logger.error(`Failed to delete release with ID ${refRelease}.`, error);
            throw error;
        }
    }
    async findReleasesWithTickets() {
        try {
            this.logger.log('Fetching releases with tickets...');
            const result = await this.dataSource.query(`SELECT * FROM releas LEFT JOIN ticket ON releas.ref_release = ticket.release_ref_release`);
            this.logger.log('Fetched releases with tickets:', result);
            return result;
        }
        catch (error) {
            this.logger.error('Failed to fetch releases with tickets.', error);
            throw error;
        }
    }
};
ReleasService = ReleasService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(releas_entity_1.Releas)),
    __param(1, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [releas_repository_1.ReleasRepository,
        typeorm_2.DataSource])
], ReleasService);
exports.ReleasService = ReleasService;
//# sourceMappingURL=releas.service.js.map