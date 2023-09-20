import { TicketService } from '../../service/ticket/ticket.service';
import { Ticket } from '../../../typeorm/entities/testingManage/ticket.entity';
export declare class TicketController {
    private readonly ticketServiceImpl;
    constructor(ticketServiceImpl: TicketService);
    getTicket(): Promise<Ticket[]>;
    getTicketById(refTicket: number): Promise<Ticket>;
    createTicket(ticket: Ticket): Promise<Ticket>;
    updateTicket(refTicket: number, ticket: Ticket): Promise<Ticket>;
    deleteTicket(refTicket: number): Promise<void>;
    getAllTicketRelease(id: number): Promise<Ticket[]>;
    getVisionTicket(id: number): Promise<Object[]>;
    getVisionBloquante(id: number): Promise<any>;
    getVisionMajeure(id: number): Promise<any>;
    getVisionMineure(id: number): Promise<any>;
}
