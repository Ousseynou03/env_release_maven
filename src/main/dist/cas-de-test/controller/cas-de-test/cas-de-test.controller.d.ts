import { CasDeTestService } from '../../service/cas-de-test/cas-de-test.service';
import { CasDeTest } from '../../../typeorm/entities/testingManage/casDeTest.entity';
export declare class CasDeTestController {
    private readonly casDeTestServiceImpl;
    constructor(casDeTestServiceImpl: CasDeTestService);
    getCasDeTest(): Promise<CasDeTest[]>;
    getCasTestById(refcasTest: number): Promise<CasDeTest>;
    createCasDeTest(casDeTest: CasDeTest): Promise<CasDeTest>;
    updateCasDeTest(refCasTest: number, casDeTest: CasDeTest): Promise<CasDeTest>;
    deleteCasDeTest(refCasTest: number): Promise<void>;
    getCasVisionTest(id: number): Promise<Object>;
}
