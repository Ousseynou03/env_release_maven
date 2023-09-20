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
exports.Testeur = void 0;
const typeorm_1 = require("typeorm");
const ticket_entity_1 = require("./ticket.entity");
let Testeur = class Testeur {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "id_testeur" }),
    __metadata("design:type", Number)
], Testeur.prototype, "idTesteur", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "matricule", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Testeur.prototype, "matricule", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "nom", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Testeur.prototype, "nom", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "prenom", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Testeur.prototype, "prenom", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ticket_entity_1.Ticket, (ticket) => ticket.testeur),
    __metadata("design:type", Array)
], Testeur.prototype, "ticket", void 0);
Testeur = __decorate([
    (0, typeorm_1.Entity)("testeur")
], Testeur);
exports.Testeur = Testeur;
//# sourceMappingURL=testeur.entity.js.map