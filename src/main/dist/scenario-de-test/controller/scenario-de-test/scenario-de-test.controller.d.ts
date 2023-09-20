import { ScenarioDeTestService } from '../../service/scenario-de-test/scenario-de-test.service';
import { ScenarioDeTest } from '../../../typeorm/entities/testingManage/scenarioDeTest.entity';
export declare class ScenarioDeTestController {
    private readonly scenarioDeTestServiceImpl;
    constructor(scenarioDeTestServiceImpl: ScenarioDeTestService);
    getScenario(): Promise<ScenarioDeTest[]>;
    getScenarioDeTestById(refScenario: number): Promise<ScenarioDeTest>;
    createSceanrioDeTest(scenarioDeTest: ScenarioDeTest): Promise<ScenarioDeTest>;
    updateScenarioDeTest(refScenario: number, scenarioDeTest: ScenarioDeTest): Promise<ScenarioDeTest>;
    deleteScenario(refScenario: number): Promise<void>;
    getScenarioTestForCasTest(id: number): Promise<ScenarioDeTest[]>;
}
