import { ReleasService } from '../../service/releas/releas.service';
import { Releas } from '../../../typeorm/entities/testingManage/releas.entity';
export declare class ReleasController {
    private readonly releasServiceImpl;
    constructor(releasServiceImpl: ReleasService);
    getRelease(): Promise<Releas[]>;
    getReleasById(refRelease: number): Promise<Releas>;
    createReleas(releas: Releas): Promise<Releas>;
    updateReleas(refRelease: number, releas: Releas): Promise<Releas>;
    deleteRelease(refReleas: number): Promise<void>;
}
