import { CasDeTestRepository } from '../../repository/casDeTest.repository';
import { CasDeTest } from '../../../typeorm/entities/testingManage/casDeTest.entity';
import { DataSource } from 'typeorm';
export declare class CasDeTestService {
    private casDeTestRepository;
    private dataSource;
    private readonly logger;
    constructor(casDeTestRepository: CasDeTestRepository, dataSource: DataSource);
    getAllCasDeTest(): Promise<CasDeTest[]>;
    getCasDeTestById(refCasTest: number): Promise<CasDeTest>;
    addCasDeTest(casDeTest: CasDeTest): Promise<CasDeTest>;
    updateCasDeTest(casDeTest: CasDeTest): Promise<CasDeTest>;
    deleteCasDeTest(refCasTest: number): Promise<void>;
    getCasVisionTest(id: number): Promise<any[]>;
}
