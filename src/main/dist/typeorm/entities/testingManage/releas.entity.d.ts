import { Ticket } from "./ticket.entity";
export declare class Releas {
    refRelease: number;
    dateLivraison: Date | null;
    datePrevision: Date | null;
    dateReelle: Date | null;
    nomRelease: string | null;
    tickets: Promise<Ticket[]>;
}
