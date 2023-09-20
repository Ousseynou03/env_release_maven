"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReleasModule = void 0;
const common_1 = require("@nestjs/common");
const releas_service_1 = require("./service/releas/releas.service");
const releas_entity_1 = require("../typeorm/entities/testingManage/releas.entity");
const typeorm_1 = require("@nestjs/typeorm");
const releas_controller_1 = require("./controller/releas/releas.controller");
let ReleasModule = class ReleasModule {
};
ReleasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([releas_entity_1.Releas])],
        providers: [releas_service_1.ReleasService],
        controllers: [releas_controller_1.ReleasController]
    })
], ReleasModule);
exports.ReleasModule = ReleasModule;
//# sourceMappingURL=releas.module.js.map