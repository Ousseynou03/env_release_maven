"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FusionDatapfProgicielRepository = void 0;
const FusionDatapfProgiciel_1 = require("../../typeorm/entities/FusionDatapfProgiciel");
const typeorm_1 = require("typeorm");
let FusionDatapfProgicielRepository = class FusionDatapfProgicielRepository extends typeorm_1.Repository {
};
FusionDatapfProgicielRepository = __decorate([
    (0, typeorm_1.EntityRepository)(FusionDatapfProgiciel_1.FusionDatapfProgiciel)
], FusionDatapfProgicielRepository);
exports.FusionDatapfProgicielRepository = FusionDatapfProgicielRepository;
//# sourceMappingURL=fusionDatapfProgiciel.repository.js.map