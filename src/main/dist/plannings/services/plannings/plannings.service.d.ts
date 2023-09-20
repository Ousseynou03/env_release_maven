import { CreatePlanningParams, UpdatePlanningParams } from '../../../utils/types';
import { Planning } from '../../../typeorm/entities/Planning';
import { PlanningRepository } from '../../repository/planning.repository';
export declare class PlanningsService {
    private planningRepository;
    constructor(planningRepository: PlanningRepository);
    findPlannings(): Promise<Planning[]>;
    createPlanning(planning: CreatePlanningParams): Promise<Planning>;
    updatePlanning(id: number, updatePlanning: UpdatePlanningParams): Promise<import("typeorm").UpdateResult>;
    deletePlanning(id: number): Promise<import("typeorm").DeleteResult>;
}
