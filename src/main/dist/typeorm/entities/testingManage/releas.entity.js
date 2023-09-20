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
exports.Releas = void 0;
const typeorm_1 = require("typeorm");
const ticket_entity_1 = require("./ticket.entity");
let Releas = class Releas {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "bigint", name: "ref_release" }),
    __metadata("design:type", Number)
], Releas.prototype, "refRelease", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "date_livraison", nullable: true }),
    __metadata("design:type", Date)
], Releas.prototype, "dateLivraison", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "date_prevision", nullable: true }),
    __metadata("design:type", Date)
], Releas.prototype, "datePrevision", void 0);
__decorate([
    (0, typeorm_1.Column)("date", { name: "date_reelle", nullable: true }),
    __metadata("design:type", Date)
], Releas.prototype, "dateReelle", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "nom_release", nullable: true, length: 255 }),
    __metadata("design:type", String)
], Releas.prototype, "nomRelease", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ticket_entity_1.Ticket, (ticket) => ticket.release, { onDelete: "CASCADE" }),
    __metadata("design:type", Promise)
], Releas.prototype, "tickets", void 0);
Releas = __decorate([
    (0, typeorm_1.Entity)("releas")
], Releas);
exports.Releas = Releas;
//# sourceMappingURL=releas.entity.js.map