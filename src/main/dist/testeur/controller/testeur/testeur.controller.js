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
exports.TesteurController = void 0;
const common_1 = require("@nestjs/common");
const testeur_service_1 = require("../../service/testeur/testeur.service");
const testeur_entity_1 = require("../../../typeorm/entities/testingManage/testeur.entity");
let TesteurController = class TesteurController {
    constructor(testeurServiceImpl) {
        this.testeurServiceImpl = testeurServiceImpl;
    }
    async getTesteur() {
        return this.testeurServiceImpl.getAllTesteur();
    }
    async getTesteurById(idTesteur) {
        return this.testeurServiceImpl.getTesteurById(idTesteur);
    }
    async createTesteur(testeur) {
        try {
            return await this.testeurServiceImpl.addTesteur(testeur);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Une erreur est survenue lors de l\'ajout d\'un testeur');
        }
    }
    async updateTesteur(idTesteur, testeur) {
        testeur.idTesteur = idTesteur;
        return this.testeurServiceImpl.updateTesteur(testeur);
    }
    async deleteTesteur(idTesteur) {
        await this.testeurServiceImpl.deleteTesteur(idTesteur);
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TesteurController.prototype, "getTesteur", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TesteurController.prototype, "getTesteurById", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [testeur_entity_1.Testeur]),
    __metadata("design:returntype", Promise)
], TesteurController.prototype, "createTesteur", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, testeur_entity_1.Testeur]),
    __metadata("design:returntype", Promise)
], TesteurController.prototype, "updateTesteur", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TesteurController.prototype, "deleteTesteur", null);
TesteurController = __decorate([
    (0, common_1.Controller)('testeurManager'),
    __metadata("design:paramtypes", [testeur_service_1.TesteurService])
], TesteurController);
exports.TesteurController = TesteurController;
//# sourceMappingURL=testeur.controller.js.map