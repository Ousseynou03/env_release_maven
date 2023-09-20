import { CreateTaskDto } from '../../dtos/CreateTask.dto';
import { UpdateTaskDto } from '../../dtos/UpdateTask.dto';
import { TasksService } from '../../services/tasks/tasks.service';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getTasks(): Promise<import("../../../typeorm/entities/Task").Task[]>;
    deleteTaskById(id: number): Promise<void>;
    createTask(id: number, createTaskDto: CreateTaskDto): Promise<import("../../../typeorm/entities/Task").Task>;
    updateTaskById(id: number, updateTaskDto: UpdateTaskDto): Promise<void>;
}
