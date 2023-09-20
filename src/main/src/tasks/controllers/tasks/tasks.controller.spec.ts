import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksService } from '../../services/tasks/tasks.service';
import { Task } from '../../../typeorm/entities/Task';
import { TaskRepository } from '../../repository/task.repository';
import { getRepositoryToken } from '@nestjs/typeorm';
import {PlanningsService} from "../../../plannings/services/plannings/plannings.service";
import {PlanningRepository} from "../../../plannings/repository/planning.repository";

describe('TasksController', () => {
  let controller: TasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,PlanningsService,TaskRepository,PlanningRepository,
        {
          provide: getRepositoryToken(Task),
          useValue: TaskRepository,        
        },
      ],
      controllers: [TasksController],
    }).compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
