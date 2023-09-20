import { Activity } from '../../../typeorm/entities/Activity';
import { CreateActivityParams, UpdateActivityParams } from '../../../utils/types';
import { ActivityRepository } from '../../../activities/repository/activities.repository';
export declare class ActivitiesService {
    private activityRepository;
    private readonly logger;
    constructor(activityRepository: ActivityRepository);
    findActivities(): Promise<Activity[]>;
    createActivity(activity: CreateActivityParams): Promise<Activity>;
    updateActivity(id: number, updateActivityDetails: UpdateActivityParams): Promise<import("typeorm").UpdateResult>;
    deleteActivity(id: number): Promise<import("typeorm").DeleteResult>;
}
