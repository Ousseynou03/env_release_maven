import { CreateTaskParams, UpdateTaskParams } from '../../../utils/types';
import { Task } from '../../../typeorm/entities/Task';
import { PlanningRepository } from '../../../plannings/repository/planning.repository';
import { TaskRepository } from '../../repository/task.repository';
export declare class TasksService {
    private taskRepository;
    private planningRepository;
    private readonly logger;
    constructor(taskRepository: TaskRepository, planningRepository: PlanningRepository);
    findTasks(): Promise<Task[]>;
    createPlanningTask(id: number, createPlanningTaskDetails: CreateTaskParams): Promise<Task>;
    updatePlanningTask(id: number, updateTaskDetails: UpdateTaskParams): Promise<import("typeorm").UpdateResult>;
    deleteTask(id: number): Promise<import("typeorm").DeleteResult>;
}
