import { Ticket } from "../../typeorm/entities/testingManage/ticket.entity";
import { Repository } from "typeorm";
export declare class TicketRepository extends Repository<Ticket> {
    findAllTicketsOfRelease(id: number): Promise<Ticket[]>;
}
