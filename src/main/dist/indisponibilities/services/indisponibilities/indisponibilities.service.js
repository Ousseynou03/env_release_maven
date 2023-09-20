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
exports.IndisponibilitiesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Indisponibility_1 = require("../../../typeorm/entities/Indisponibility");
const indisponibility_repository_1 = require("../../../indisponibilities/repository/indisponibility.repository");
let IndisponibilitiesService = class IndisponibilitiesService {
    constructor(indisponibilityRepository) {
        this.indisponibilityRepository = indisponibilityRepository;
    }
    findIndisponibilities() {
        return this.indisponibilityRepository.find();
    }
    createIndisponibilities(indisponibility) {
        const newIndisponibility = this.indisponibilityRepository.create(Object.assign(Object.assign({}, indisponibility), { createdAt: new Date() }));
        return this.indisponibilityRepository.save(newIndisponibility);
    }
    updateIndisponibilities(id, updateIndisponibility) {
        return this.indisponibilityRepository.update({ id }, Object.assign({}, updateIndisponibility));
    }
    deleteIndisponibility(id) {
        return this.indisponibilityRepository.delete({ id });
    }
};
IndisponibilitiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Indisponibility_1.Indisponibility)),
    __metadata("design:paramtypes", [indisponibility_repository_1.IndisponibilityRepository])
], IndisponibilitiesService);
exports.IndisponibilitiesService = IndisponibilitiesService;
//# sourceMappingURL=indisponibilities.service.js.map