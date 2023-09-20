"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var TasksService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Task_1 = require("../../../typeorm/entities/Task");
const Planning_1 = require("../../../typeorm/entities/Planning");
const planning_repository_1 = require("../../../plannings/repository/planning.repository");
const task_repository_1 = require("../../repository/task.repository");
let TasksService = TasksService_1 = class TasksService {
    constructor(taskRepository, planningRepository) {
        this.taskRepository = taskRepository;
        this.planningRepository = planningRepository;
        this.logger = new common_1.Logger(TasksService_1.name);
    }
    findTasks() {
        return this.taskRepository.find({ relations: ['planning'] });
    }
    async createPlanningTask(id, createPlanningTaskDetails) {
        const planning = await this.planningRepository.findOneBy({ id });
        if (!planning)
            throw new common_1.HttpException('Planning not found. Cannot create Task', common_1.HttpStatus.BAD_REQUEST);
        const newTask = this.taskRepository.create(Object.assign(Object.assign({}, createPlanningTaskDetails), { planning, createdAt: new Date() }));
        return this.taskRepository.save(newTask);
    }
    updatePlanningTask(id, updateTaskDetails) {
        return this.taskRepository.update({ id }, Object.assign({}, updateTaskDetails));
    }
    deleteTask(id) {
        return this.taskRepository.delete({ id });
    }
};
TasksService = TasksService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Task_1.Task)),
    __param(1, (0, typeorm_1.InjectRepository)(Planning_1.Planning)),
    __metadata("design:paramtypes", [task_repository_1.TaskRepository,
        planning_repository_1.PlanningRepository])
], TasksService);
exports.TasksService = TasksService;
//# sourceMappingURL=tasks.service.js.map