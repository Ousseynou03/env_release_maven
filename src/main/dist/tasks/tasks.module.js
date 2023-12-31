"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Planning_1 = require("../typeorm/entities/Planning");
const tasks_controller_1 = require("./controllers/tasks/tasks.controller");
const tasks_service_1 = require("./services/tasks/tasks.service");
const Task_1 = require("../typeorm/entities/Task");
const plannings_service_1 = require("../plannings/services/plannings/plannings.service");
const task_repository_1 = require("./repository/task.repository");
const planning_repository_1 = require("../plannings/repository/planning.repository");
let TasksModule = class TasksModule {
};
TasksModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Task_1.Task, Planning_1.Planning])],
        controllers: [tasks_controller_1.TasksController],
        providers: [tasks_service_1.TasksService, task_repository_1.TaskRepository, planning_repository_1.PlanningRepository, plannings_service_1.PlanningsService],
    })
], TasksModule);
exports.TasksModule = TasksModule;
//# sourceMappingURL=tasks.module.js.map