"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnomalieModule = void 0;
const common_1 = require("@nestjs/common");
const anomalie_service_1 = require("./service/anomalie/anomalie.service");
const anomalie_entity_1 = require("../typeorm/entities/testingManage/anomalie.entity");
const typeorm_1 = require("@nestjs/typeorm");
const anomalie_controller_1 = require("./controller/anomalie/anomalie.controller");
let AnomalieModule = class AnomalieModule {
};
AnomalieModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([anomalie_entity_1.Anomalie])],
        providers: [anomalie_service_1.AnomalieService],
        controllers: [anomalie_controller_1.AnomalieController]
    })
], AnomalieModule);
exports.AnomalieModule = AnomalieModule;
//# sourceMappingURL=anomalie.module.js.map