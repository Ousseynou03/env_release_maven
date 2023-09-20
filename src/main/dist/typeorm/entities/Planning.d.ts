import { Task } from './Task';
export declare class Planning {
    id: number;
    planning_name: string;
    start_date: Date;
    end_date: Date;
    createdAt: Date;
    tasks: Task[];
}
