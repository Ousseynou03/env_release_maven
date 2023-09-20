"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TesteurModule = void 0;
const common_1 = require("@nestjs/common");
const testeur_service_1 = require("./service/testeur/testeur.service");
const testeur_entity_1 = require("../typeorm/entities/testingManage/testeur.entity");
const typeorm_1 = require("@nestjs/typeorm");
const testeur_controller_1 = require("./controller/testeur/testeur.controller");
let TesteurModule = class TesteurModule {
};
TesteurModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([testeur_entity_1.Testeur])],
        providers: [testeur_service_1.TesteurService],
        controllers: [testeur_controller_1.TesteurController]
    })
], TesteurModule);
exports.TesteurModule = TesteurModule;
//# sourceMappingURL=testeur.module.js.map