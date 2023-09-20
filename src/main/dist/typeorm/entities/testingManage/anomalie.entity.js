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
exports.Anomalie = void 0;
const cloturee_enum_1 = require("../../enums/cloturee.enum");
const criticite_enum_1 = require("../../enums/criticite.enum");
const enCours_enum_1 = require("../../enums/enCours.enum");
const priorite_enum_1 = require("../../enums/priorite.enum");
const statut_enum_1 = require("../../enums/statut.enum");
const typeorm_1 = require("typeorm");
const ticket_entity_1 = require("./ticket.entity");
let Anomalie = class Anomalie {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "ref_anomalie" }),
    __metadata("design:type", Number)
], Anomalie.prototype, "refAnomalie", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "cloturee", nullable: true, length: 30 }),
    __metadata("design:type", Number)
], Anomalie.prototype, "cloturee", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "criticite", nullable: true, length: 30 }),
    __metadata("design:type", Number)
], Anomalie.prototype, "criticite", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "en_cours", nullable: true, length: 30 }),
    __metadata("design:type", Number)
], Anomalie.prototype, "enCours", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "priorite", nullable: true, length: 30 }),
    __metadata("design:type", Number)
], Anomalie.prototype, "priorite", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "statut", nullable: true, length: 30 }),
    __metadata("design:type", Number)
], Anomalie.prototype, "statut", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ticket_entity_1.Ticket, (ticket) => ticket.anomalies),
    __metadata("design:type", Promise)
], Anomalie.prototype, "ticket", void 0);
Anomalie = __decorate([
    (0, typeorm_1.Entity)("anomalie")
], Anomalie);
exports.Anomalie = Anomalie;
//# sourceMappingURL=anomalie.entity.js.map