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
exports.Ticket = void 0;
const typeorm_1 = require("typeorm");
const releas_entity_1 = require("./releas.entity");
const anomalie_entity_1 = require("./anomalie.entity");
const casDeTest_entity_1 = require("./casDeTest.entity");
const testeur_entity_1 = require("./testeur.entity");
const types_enums_1 = require("../../enums/types.enums");
let Ticket = class Ticket {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "ref_ticket" }),
    __metadata("design:type", Number)
], Ticket.prototype, "refTicket", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "titre", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Ticket.prototype, "titre", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "type", nullable: true, length: 30 }),
    __metadata("design:type", Number)
], Ticket.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => testeur_entity_1.Testeur, (testeur) => testeur.ticket, { eager: true }),
    (0, typeorm_1.JoinColumn)([
        { name: "testeur_id_testeur", referencedColumnName: "idTesteur" },
    ]),
    __metadata("design:type", testeur_entity_1.Testeur)
], Ticket.prototype, "testeur", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => releas_entity_1.Releas, (releas) => releas.tickets, { eager: true, onDelete: "CASCADE" }),
    (0, typeorm_1.JoinColumn)([
        { name: "release_ref_release", referencedColumnName: "refRelease" },
    ]),
    __metadata("design:type", releas_entity_1.Releas)
], Ticket.prototype, "release", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => anomalie_entity_1.Anomalie, (anomalie) => anomalie.ticket, { eager: true }),
    (0, typeorm_1.JoinColumn)([
        { name: "anomalies_ref_anomalie", referencedColumnName: "refAnomalie" }
    ]),
    __metadata("design:type", anomalie_entity_1.Anomalie)
], Ticket.prototype, "anomalies", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => casDeTest_entity_1.CasDeTest, (casDeTest) => casDeTest.ticket, { eager: true }),
    (0, typeorm_1.JoinColumn)([
        { name: "cas_de_test_ref_cas_test", referencedColumnName: "refCasTest" },
    ]),
    __metadata("design:type", casDeTest_entity_1.CasDeTest)
], Ticket.prototype, "casDeTest", void 0);
Ticket = __decorate([
    (0, typeorm_1.Entity)("ticket")
], Ticket);
exports.Ticket = Ticket;
//# sourceMappingURL=ticket.entity.js.map