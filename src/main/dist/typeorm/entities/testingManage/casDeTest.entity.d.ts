import { Resultat } from "../../enums/resultat.enum";
import { ScenarioDeTest } from "./scenarioDeTest.entity";
import { Ticket } from "./ticket.entity";
export declare class CasDeTest {
    refCasTest: number;
    resultat: Resultat | null;
    scenarioDeTests: ScenarioDeTest[];
    ticket: Ticket[];
}
