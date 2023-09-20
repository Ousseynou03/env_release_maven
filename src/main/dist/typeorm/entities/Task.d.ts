import { Planning } from './Planning';
export declare class Task {
    id: number;
    title: string;
    description: string;
    status: string;
    createdAt: Date;
    planning: Planning;
}
