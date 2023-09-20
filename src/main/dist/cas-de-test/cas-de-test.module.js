"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasDeTestModule = void 0;
const common_1 = require("@nestjs/common");
const cas_de_test_service_1 = require("./service/cas-de-test/cas-de-test.service");
const casDeTest_entity_1 = require("../typeorm/entities/testingManage/casDeTest.entity");
const typeorm_1 = require("@nestjs/typeorm");
const cas_de_test_controller_1 = require("./controller/cas-de-test/cas-de-test.controller");
let CasDeTestModule = class CasDeTestModule {
};
CasDeTestModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([casDeTest_entity_1.CasDeTest])],
        providers: [cas_de_test_service_1.CasDeTestService],
        controllers: [cas_de_test_controller_1.CasDeTestController]
    })
], CasDeTestModule);
exports.CasDeTestModule = CasDeTestModule;
//# sourceMappingURL=cas-de-test.module.js.map