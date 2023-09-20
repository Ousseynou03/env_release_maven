import { TesteurService } from '../../service/testeur/testeur.service';
import { Testeur } from '../../../typeorm/entities/testingManage/testeur.entity';
export declare class TesteurController {
    private readonly testeurServiceImpl;
    constructor(testeurServiceImpl: TesteurService);
    getTesteur(): Promise<Testeur[]>;
    getTesteurById(idTesteur: number): Promise<Testeur>;
    createTesteur(testeur: Testeur): Promise<Testeur>;
    updateTesteur(idTesteur: number, testeur: Testeur): Promise<Testeur>;
    deleteTesteur(idTesteur: number): Promise<void>;
}
