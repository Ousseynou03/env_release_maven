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
exports.CasDeTest = void 0;
const resultat_enum_1 = require("../../enums/resultat.enum");
const typeorm_1 = require("typeorm");
const scenarioDeTest_entity_1 = require("./scenarioDeTest.entity");
const ticket_entity_1 = require("./ticket.entity");
let CasDeTest = class CasDeTest {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "ref_cas_test" }),
    __metadata("design:type", Number)
], CasDeTest.prototype, "refCasTest", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "resultat", nullable: true, length: 38 }),
    __metadata("design:type", Number)
], CasDeTest.prototype, "resultat", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => scenarioDeTest_entity_1.ScenarioDeTest, (scenarioDeTest) => scenarioDeTest.casDeTest),
    __metadata("design:type", Array)
], CasDeTest.prototype, "scenarioDeTests", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ticket_entity_1.Ticket, (ticket) => ticket.casDeTest),
    __metadata("design:type", Array)
], CasDeTest.prototype, "ticket", void 0);
CasDeTest = __decorate([
    (0, typeorm_1.Entity)("cas_de_test")
], CasDeTest);
exports.CasDeTest = CasDeTest;
//# sourceMappingURL=casDeTest.entity.js.map