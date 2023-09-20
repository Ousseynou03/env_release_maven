import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Planning } from '../typeorm/entities/Planning';
import { TasksController } from './controllers/tasks/tasks.controller';
import { TasksService } from './services/tasks/tasks.service';
import { Task } from '../typeorm/entities/Task';
import {PlanningsService} from "../plannings/services/plannings/plannings.service";
import {TaskRepository} from "./repository/task.repository";
import {PlanningRepository} from "../plannings/repository/planning.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Task, Planning])],
  controllers: [TasksController],
  providers: [TasksService,TaskRepository,PlanningRepository,PlanningsService],
})
export class TasksModule {}
