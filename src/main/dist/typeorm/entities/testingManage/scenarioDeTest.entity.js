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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenarioDeTest = void 0;
const typeorm_1 = require("typeorm");
const casDeTest_entity_1 = require("./casDeTest.entity");
let ScenarioDeTest = class ScenarioDeTest {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "ref_scenario" }),
    __metadata("design:type", Number)
], ScenarioDeTest.prototype, "refScenario", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "scenario", nullable: true, length: 300 }),
    __metadata("design:type", String)
], ScenarioDeTest.prototype, "scenario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => casDeTest_entity_1.CasDeTest, (casDeTest) => casDeTest.scenarioDeTests),
    (0, typeorm_1.JoinColumn)([
        { name: "cas_de_test_ref_cas_test", referencedColumnName: "refCasTest" },
    ]),
    __metadata("design:type", casDeTest_entity_1.CasDeTest)
], ScenarioDeTest.prototype, "casDeTest", void 0);
ScenarioDeTest = __decorate([
    (0, typeorm_1.Entity)("scenario_de_test")
], ScenarioDeTest);
exports.ScenarioDeTest = ScenarioDeTest;
//# sourceMappingURL=scenarioDeTest.entity.js.map