import { TesteurRepository } from '../../repository/testeur.repository';
import { Testeur } from '../../../typeorm/entities/testingManage/testeur.entity';
export declare class TesteurService {
    private testeurRepository;
    private readonly logger;
    constructor(testeurRepository: TesteurRepository);
    getAllTesteur(): Promise<Testeur[]>;
    getTesteurById(idTesteur: number): Promise<Testeur>;
    addTesteur(testeur: Testeur): Promise<Testeur>;
    updateTesteur(testeur: Testeur): Promise<Testeur>;
    deleteTesteur(idTesteur: number): Promise<void>;
}
