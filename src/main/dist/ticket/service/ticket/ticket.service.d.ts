import { TicketRepository } from '../../repository/ticket.repository';
import { Ticket } from '../../../typeorm/entities/testingManage/ticket.entity';
import { DataSource } from 'typeorm';
export declare class TicketService {
    private ticketRepository;
    private dataSource;
    constructor(ticketRepository: TicketRepository, dataSource: DataSource);
    getAllTicket(): Promise<Ticket[]>;
    getTicketById(refTicket: number): Promise<Ticket>;
    addTicket(ticket: Ticket): Promise<Ticket>;
    updateTicket(ticket: Ticket): Promise<Ticket>;
    deleteTicket(refTicket: number): Promise<void>;
    AllTicketRelease(id: number): Promise<Ticket[]>;
    visonTicket(id: number): Promise<number[]>;
    visionAnomalieBloquant(id: number): Promise<number[]>;
    visionAnomalieMajeure(id: number): Promise<number[]>;
    visionAnomalieMineure(id: number): Promise<any>;
}
