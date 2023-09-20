"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenarioDeTestModule = void 0;
const common_1 = require("@nestjs/common");
const scenario_de_test_service_1 = require("./service/scenario-de-test/scenario-de-test.service");
const typeorm_1 = require("@nestjs/typeorm");
const scenarioDeTest_entity_1 = require("../typeorm/entities/testingManage/scenarioDeTest.entity");
const scenario_de_test_controller_1 = require("./controller/scenario-de-test/scenario-de-test.controller");
let ScenarioDeTestModule = class ScenarioDeTestModule {
};
ScenarioDeTestModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([scenarioDeTest_entity_1.ScenarioDeTest])],
        providers: [scenario_de_test_service_1.ScenarioDeTestService],
        controllers: [scenario_de_test_controller_1.ScenarioDeTestController]
    })
], ScenarioDeTestModule);
exports.ScenarioDeTestModule = ScenarioDeTestModule;
//# sourceMappingURL=scenario-de-test.module.js.map