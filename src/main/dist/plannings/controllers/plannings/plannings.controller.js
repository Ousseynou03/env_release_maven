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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanningsController = void 0;
const common_1 = require("@nestjs/common");
const CreatePlanning_dto_1 = require("../../dtos/CreatePlanning.dto");
const UpdatePlanning_dto_1 = require("../../dtos/UpdatePlanning.dto");
const plannings_service_1 = require("../../services/plannings/plannings.service");
let PlanningsController = class PlanningsController {
    constructor(planningService) {
        this.planningService = planningService;
    }
    getPlannings() {
        return this.planningService.findPlannings();
    }
    createPlanning(createPlanningDto) {
        return this.planningService.createPlanning(createPlanningDto);
    }
    async updatePlanningById(id, updatePlanningDto) {
        await this.planningService.updatePlanning(id, updatePlanningDto);
    }
    async deletePlanningById(id) {
        await this.planningService.deletePlanning(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlanningsController.prototype, "getPlannings", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreatePlanning_dto_1.CreatePlanningDto]),
    __metadata("design:returntype", void 0)
], PlanningsController.prototype, "createPlanning", null);
__decorate([
    (0, common_1.Put)(':id/update'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, UpdatePlanning_dto_1.UpdatePlanningDto]),
    __metadata("design:returntype", Promise)
], PlanningsController.prototype, "updatePlanningById", null);
__decorate([
    (0, common_1.Delete)(':id/delete'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PlanningsController.prototype, "deletePlanningById", null);
PlanningsController = __decorate([
    (0, common_1.Controller)('api/plannings'),
    __metadata("design:paramtypes", [plannings_service_1.PlanningsService])
], PlanningsController);
exports.PlanningsController = PlanningsController;
//# sourceMappingURL=plannings.controller.js.map