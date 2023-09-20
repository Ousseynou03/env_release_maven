import { ReleasRepository } from '../../repository/releas.repository';
import { Releas } from '../../../typeorm/entities/testingManage/releas.entity';
import { DataSource } from 'typeorm';
export declare class ReleasService {
    private releasRepository;
    private dataSource;
    private readonly logger;
    constructor(releasRepository: ReleasRepository, dataSource: DataSource);
    getAllRelease(): Promise<Releas[]>;
    getReleasById(refRelease: number): Promise<Releas>;
    addReleas(releas: Releas): Promise<Releas>;
    updateReleas(releas: Releas): Promise<Releas>;
    deleteReleas(refRelease: number): Promise<void>;
    findReleasesWithTickets(): Promise<any[]>;
}
