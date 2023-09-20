import { Cloturee } from "../../enums/cloturee.enum";
import { Criticite } from "../../enums/criticite.enum";
import { EnCours } from "../../enums/enCours.enum";
import { Priorite } from "../../enums/priorite.enum";
import { Statut } from "../../enums/statut.enum";
import { Ticket } from "./ticket.entity";
export declare class Anomalie {
    refAnomalie: number;
    cloturee: Cloturee | null;
    criticite: Criticite | null;
    enCours: EnCours | null;
    priorite: Priorite | null;
    statut: Statut | null;
    ticket: Promise<Ticket[]>;
}
