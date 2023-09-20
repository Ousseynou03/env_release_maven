import { AnomalieRepository } from '../../repository/anomalie.repository';
import { Anomalie } from '../../../typeorm/entities/testingManage/anomalie.entity';
import { DataSource } from 'typeorm';
export declare class AnomalieService {
    private anomalieRepository;
    private dataSource;
    private readonly logger;
    constructor(anomalieRepository: AnomalieRepository, dataSource: DataSource);
    getAllAnomalie(): Promise<Anomalie[]>;
    getAnomalieById(refAnomalie: number): Promise<Anomalie>;
    addAnomalie(anomalie: Anomalie): Promise<Anomalie>;
    updateAnomalie(anomalie: Anomalie): Promise<Anomalie>;
    deleteAnomalie(refAnomalie: number): Promise<void>;
}
