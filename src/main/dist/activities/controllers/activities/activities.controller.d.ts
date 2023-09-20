import { CreateActivityDto } from '../../dtos/CreateActivity.dto';
import { UpdateActivityDto } from '../../dtos/UpdateActivity.dto';
import { ActivitiesService } from '../../services/activities/activities.service';
export declare class ActivitiesController {
    private activityService;
    constructor(activityService: ActivitiesService);
    getPlannings(): Promise<import("../../../typeorm/entities/Activity").Activity[]>;
    createActivity(createActivityDto: CreateActivityDto): Promise<import("../../../typeorm/entities/Activity").Activity>;
    updateActivityById(id: number, updateActivityDto: UpdateActivityDto): Promise<void>;
    deleteActivityById(id: number): Promise<void>;
}
