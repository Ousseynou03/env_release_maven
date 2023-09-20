import { ScenarioDeTestRepository } from '../../repository/scenarioDeTest.repository';
import { ScenarioDeTest } from '../../../typeorm/entities/testingManage/scenarioDeTest.entity';
import { DataSource } from 'typeorm';
export declare class ScenarioDeTestService {
    private scenarioDeTestRepository;
    private dataSource;
    private readonly logger;
    constructor(scenarioDeTestRepository: ScenarioDeTestRepository, dataSource: DataSource);
    getAllScenario(): Promise<ScenarioDeTest[]>;
    getScenarioDeTestById(refScenario: number): Promise<ScenarioDeTest>;
    updateScenarioDeTest(scenarioDeTest: ScenarioDeTest): Promise<ScenarioDeTest>;
    addScenarioDeTest(scenarioDeTest: ScenarioDeTest): Promise<ScenarioDeTest>;
    deleteScenarioDeTest(refScenario: number): Promise<void>;
    getAllScenarioCasDeTest(id: number): Promise<ScenarioDeTest[]>;
}
