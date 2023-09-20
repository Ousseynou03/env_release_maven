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
var ActivitiesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivitiesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Activity_1 = require("../../../typeorm/entities/Activity");
const activities_repository_1 = require("../../../activities/repository/activities.repository");
let ActivitiesService = ActivitiesService_1 = class ActivitiesService {
    constructor(activityRepository) {
        this.activityRepository = activityRepository;
        this.logger = new common_1.Logger(ActivitiesService_1.name);
    }
    findActivities() {
        try {
            this.logger.log('Fetching activities...');
            return this.activityRepository.find();
        }
        catch (error) {
            this.logger.error('Failed to fetch activities.', error);
            throw error;
        }
    }
    createActivity(activity) {
        try {
            this.logger.log('Creating new activity...');
            const newActivity = this.activityRepository.create(Object.assign(Object.assign({}, activity), { createdAt: new Date() }));
            return this.activityRepository.save(newActivity);
        }
        catch (error) {
            this.logger.error('Failed to create activity.', error);
            throw error;
        }
    }
    updateActivity(id, updateActivityDetails) {
        try {
            this.logger.log(`Updating activity with ID ${id}...`);
            return this.activityRepository.update({ id }, Object.assign({}, updateActivityDetails));
        }
        catch (error) {
            this.logger.error(`Failed to update activity with ID ${id}.`, error);
            throw error;
        }
    }
    deleteActivity(id) {
        try {
            this.logger.log(`Deleting activity with ID ${id}...`);
            return this.activityRepository.delete({ id });
        }
        catch (error) {
            this.logger.error(`Failed to delete activity with ID ${id}.`, error);
            throw error;
        }
    }
};
ActivitiesService = ActivitiesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Activity_1.Activity)),
    __metadata("design:paramtypes", [activities_repository_1.ActivityRepository])
], ActivitiesService);
exports.ActivitiesService = ActivitiesService;
//# sourceMappingURL=activities.service.js.map