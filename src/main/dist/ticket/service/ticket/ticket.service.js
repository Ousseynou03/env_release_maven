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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ticket_repository_1 = require("../../repository/ticket.repository");
const ticket_entity_1 = require("../../../typeorm/entities/testingManage/ticket.entity");
const typeorm_2 = require("typeorm");
let TicketService = class TicketService {
    constructor(ticketRepository, dataSource) {
        this.ticketRepository = ticketRepository;
        this.dataSource = dataSource;
    }
    async getAllTicket() {
        return this.ticketRepository.find();
    }
    async getTicketById(refTicket) {
        const ticket = await this.ticketRepository.findOneBy({ refTicket });
        if (!ticket) {
            throw new common_1.NotFoundException(`Ticket with ID:${refTicket} not found`);
        }
        return ticket;
    }
    async addTicket(ticket) {
        return this.ticketRepository.save(ticket);
    }
    async updateTicket(ticket) {
        return this.ticketRepository.save(ticket);
    }
    async deleteTicket(refTicket) {
        await this.ticketRepository.delete(refTicket);
    }
    async AllTicketRelease(id) {
        const results = await this.ticketRepository
            .createQueryBuilder('ticket')
            .leftJoinAndSelect('ticket.testeur', 'testeur')
            .leftJoinAndSelect('ticket.release', 'release')
            .leftJoinAndSelect('ticket.anomalies', 'anomalies')
            .leftJoinAndSelect('ticket.casDeTest', 'casDeTest')
            .where('release.refRelease = :id', { id })
            .getMany();
        return results.map((result) => this.ticketRepository.create({
            refTicket: result.refTicket,
            titre: result.titre,
            type: result.type,
            testeur: result.testeur,
            release: result.release,
            anomalies: result.anomalies,
            casDeTest: result.casDeTest,
        }));
    }
    async visonTicket(id) {
        if (!id) {
            throw new common_1.BadRequestException('id is required');
        }
        const result = await this.dataSource.query(`
        SELECT
        (SELECT COUNT(*) FROM ticket t WHERE t.release_ref_release=${id}) as TicketToTal,
        (SELECT COUNT(*) FROM ticket t WHERE t.cas_de_test_ref_cas_test IS NOT NULL and t.release_ref_release=${id}) as TicketCouvert,
        (SELECT COUNT(*) FROM ticket t, cas_de_test c WHERE c.ref_cas_test=t.cas_de_test_ref_cas_test and c.resultat="OK" and t.release_ref_release=${id}) as OK,
        (SELECT COUNT(*) FROM ticket t, cas_de_test c WHERE c.ref_cas_test=t.cas_de_test_ref_cas_test and c.resultat="KO" and t.release_ref_release=${id}) as KO,
        (SELECT COUNT(*) FROM ticket t, cas_de_test c WHERE c.ref_cas_test=t.cas_de_test_ref_cas_test and c.resultat="Non_Teste" and t.release_ref_release=${id}) as NonTeste,
        (SELECT COUNT(*) FROM ticket t, cas_de_test c WHERE c.ref_cas_test=t.cas_de_test_ref_cas_test and c.resultat="Abandonnes" and t.release_ref_release=${id}) as Abandonnes,
        (SELECT COUNT(*) FROM ticket t, cas_de_test c WHERE c.ref_cas_test=t.cas_de_test_ref_cas_test and c.resultat="Bloquee" and t.release_ref_release=${id}) as Bloquee,
        (SELECT COUNT(*) FROM ticket t, cas_de_test c WHERE c.ref_cas_test=t.cas_de_test_ref_cas_test and c.resultat="Hors_Perimetre" and t.release_ref_release=${id}) as Hors_Perimetre
        `);
        return Object.values(result[0]).map(Number);
    }
    async visionAnomalieBloquant(id) {
        if (!id) {
            throw new common_1.BadRequestException('id is required');
        }
        const result = await this.dataSource.query(`
        SELECT
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="BLOQUANTE" and a.en_cours="A_TRAITES" and t.release_ref_release=${id}) as BLAT, 
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="BLOQUANTE" and a.en_cours="CORRIGEES" and t.release_ref_release=${id}) as BLCO, 
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="BLOQUANTE" and a.en_cours="VERIFICATION" and t.release_ref_release=${id}) as BLVE, 
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="BLOQUANTE" and a.cloturee="ValidationCorrectifs" and t.release_ref_release=${id}) as BLVC, 
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="BLOQUANTE" and a.cloturee="Rejetees" and t.release_ref_release=${id}) as BLRE, 
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="BLOQUANTE" and a.cloturee="ProblemeDocumentaire" and t.release_ref_release=${id}) as BLPD, 
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="BLOQUANTE" and a.cloturee="ArbitrageProjetEvolution" and t.release_ref_release=${id}) as BLAPE
        `);
        return Object.values(result[0]).map(Number);
    }
    async visionAnomalieMajeure(id) {
        if (!id) {
            throw new common_1.BadRequestException('id is required');
        }
        const result = await this.dataSource.query(`
        SELECT
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="MAJEURE" and a.en_cours="A_TRAITES" and t.release_ref_release=${id}) as BLAT,
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="MAJEURE" and a.en_cours="CORRIGEES" and t.release_ref_release=${id}) as BLCO,
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="MAJEURE" and a.en_cours="VERIFICATION" and t.release_ref_release=${id}) as BLVE,
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="MAJEURE" and a.cloturee="ValidationCorrectifs" and t.release_ref_release=${id}) as BLVC,
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="MAJEURE" and a.cloturee="Rejetees" and t.release_ref_release=${id}) as BLRE,
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="MAJEURE" and a.cloturee="ProblemeDocumentaire" and t.release_ref_release=${id}) as BLPD,
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="MAJEURE" and a.cloturee="ArbitrageProjetEvolution" and t.release_ref_release=${id}) as BLAPE
        `);
        return Object.values(result[0]).map(Number);
    }
    async visionAnomalieMineure(id) {
        if (!id) {
            throw new common_1.BadRequestException('id is required');
        }
        const result = await this.dataSource.query(`
        SELECT
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="MINEURE" and a.en_cours="A_TRAITES" and t.release_ref_release=${id}) as BLAT, 
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="MINEURE" and a.en_cours="CORRIGEES" and t.release_ref_release=${id}) as BLCO, 
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="MINEURE" and a.en_cours="VERIFICATION" and t.release_ref_release=${id}) as BLVE, 
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="MINEURE" and a.cloturee="ValidationCorrectifs" and t.release_ref_release=${id}) as BLVC, 
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="MINEURE" and a.cloturee="Rejetees" and t.release_ref_release=${id}) as BLRE, 
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="MINEURE" and a.cloturee="ProblemeDocumentaire" and t.release_ref_release=${id}) as BLPD, 
        (SELECT COUNT(*) FROM ticket t, anomalie a WHERE t.anomalies_ref_anomalie=a.ref_anomalie and a.criticite="MINEURE" and a.cloturee="ArbitrageProjetEvolution" and t.release_ref_release=${id}) as BLAPE
        `);
        return Object.values(result[0]).map(Number);
    }
};
TicketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ticket_entity_1.Ticket)),
    __param(1, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [ticket_repository_1.TicketRepository,
        typeorm_2.DataSource])
], TicketService);
exports.TicketService = TicketService;
//# sourceMappingURL=ticket.service.js.map