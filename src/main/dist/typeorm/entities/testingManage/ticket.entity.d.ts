import { Releas } from "./releas.entity";
import { Anomalie } from "./anomalie.entity";
import { CasDeTest } from "./casDeTest.entity";
import { Testeur } from "./testeur.entity";
import { Types } from "../../enums/types.enums";
export declare class Ticket {
    refTicket: number;
    titre: string | null;
    type: Types | null;
    testeur: Testeur;
    release: Releas;
    anomalies: Anomalie;
    casDeTest: CasDeTest;
}
