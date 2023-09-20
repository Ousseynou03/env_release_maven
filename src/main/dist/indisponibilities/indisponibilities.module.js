"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndisponibilitiesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Indisponibility_1 = require("../typeorm/entities/Indisponibility");
const indisponibilities_controller_1 = require("./controllers/indisponibilities/indisponibilities.controller");
const indisponibilities_service_1 = require("./services/indisponibilities/indisponibilities.service");
let IndisponibilitiesModule = class IndisponibilitiesModule {
};
IndisponibilitiesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Indisponibility_1.Indisponibility])],
        controllers: [indisponibilities_controller_1.IndisponibilitiesController],
        providers: [indisponibilities_service_1.IndisponibilitiesService],
    })
], IndisponibilitiesModule);
exports.IndisponibilitiesModule = IndisponibilitiesModule;
//# sourceMappingURL=indisponibilities.module.js.map