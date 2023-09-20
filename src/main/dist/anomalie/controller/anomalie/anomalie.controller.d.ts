import { AnomalieService } from '../../service/anomalie/anomalie.service';
import { Anomalie } from '../../../typeorm/entities/testingManage/anomalie.entity';
export declare class AnomalieController {
    private readonly anomalieServiceImpl;
    constructor(anomalieServiceImpl: AnomalieService);
    getAnomalie(): Promise<Anomalie[]>;
    getAnomalieById(refAnomalie: number): Promise<Anomalie>;
    createAnomalie(anomalie: Anomalie): Promise<Anomalie>;
    updateAnomalie(refAnomalie: number, anomalie: Anomalie): Promise<Anomalie>;
    deleteAnomalie(refAnomalie: number): Promise<void>;
}
