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
var EnvironmentsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const FusionDatapfProgiciel_1 = require("../../../typeorm/entities/FusionDatapfProgiciel");
const CartographieDitw_1 = require("../../../typeorm/entities/CartographieDitw");
const fusionDatapfProgiciel_repository_1 = require("../../repository/fusionDatapfProgiciel.repository");
const cartographieDitw_repository_1 = require("../../repository/cartographieDitw.repository");
let EnvironmentsService = EnvironmentsService_1 = class EnvironmentsService {
    constructor(fusionDatapfProgicielRepository, cartographieDitwRepository) {
        this.fusionDatapfProgicielRepository = fusionDatapfProgicielRepository;
        this.cartographieDitwRepository = cartographieDitwRepository;
        this.logger = new common_1.Logger(EnvironmentsService_1.name);
    }
    async findFusionDatapfProgiciels() {
        try {
            this.logger.log('Message de log');
            return await this.fusionDatapfProgicielRepository.find();
        }
        catch (error) {
            this.logger.error('Erreur lors de la recherche de FusionDatapfProgiciels', error);
            throw error;
        }
    }
    findCartographieDitws() {
        return this.cartographieDitwRepository.find();
    }
    createFusionDatapfProgiciel(fusionDatapfProgiciel) {
        const newFusionDatapfProgiciel = this.fusionDatapfProgicielRepository.create(Object.assign(Object.assign({}, fusionDatapfProgiciel), { createdAt: new Date() }));
        return this.fusionDatapfProgicielRepository.save(newFusionDatapfProgiciel);
    }
    createCartographieDitw(cartographieDitw) {
        const newCartographieDitw = this.cartographieDitwRepository.create(Object.assign(Object.assign({}, cartographieDitw), { createdAt: new Date() }));
        return this.cartographieDitwRepository.save(newCartographieDitw);
    }
    updateFusionDatapfProgiciel(id, updateFusionDatapfProgicielDetails) {
        return this.fusionDatapfProgicielRepository.update({ id }, Object.assign({}, updateFusionDatapfProgicielDetails));
    }
    updateCartographieDitw(id, updateCartographieDitwDetails) {
        return this.cartographieDitwRepository.update({ id }, Object.assign({}, updateCartographieDitwDetails));
    }
    deleteFusionDatapfProgiciel(id) {
        return this.fusionDatapfProgicielRepository.delete({ id });
    }
    deleteCartographieDitw(id) {
        return this.cartographieDitwRepository.delete({ id });
    }
};
EnvironmentsService = EnvironmentsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(FusionDatapfProgiciel_1.FusionDatapfProgiciel)),
    __param(1, (0, typeorm_1.InjectRepository)(CartographieDitw_1.CartographieDitw)),
    __metadata("design:paramtypes", [fusionDatapfProgiciel_repository_1.FusionDatapfProgicielRepository,
        cartographieDitw_repository_1.CartographieDitwRepository])
], EnvironmentsService);
exports.EnvironmentsService = EnvironmentsService;
//# sourceMappingURL=environments.service.js.map