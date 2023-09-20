import { CreatePlanningDto } from '../../dtos/CreatePlanning.dto';
import { UpdatePlanningDto } from '../../dtos/UpdatePlanning.dto';
import { PlanningsService } from '../../services/plannings/plannings.service';
export declare class PlanningsController {
    private planningService;
    constructor(planningService: PlanningsService);
    getPlannings(): Promise<import("../../../typeorm/entities/Planning").Planning[]>;
    createPlanning(createPlanningDto: CreatePlanningDto): Promise<import("../../../typeorm/entities/Planning").Planning>;
    updatePlanningById(id: number, updatePlanningDto: UpdatePlanningDto): Promise<void>;
    deletePlanningById(id: number): Promise<void>;
}
