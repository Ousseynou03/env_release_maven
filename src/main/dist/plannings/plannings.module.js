"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanningsModule = void 0;
const common_1 = require("@nestjs/common");
const plannings_controller_1 = require("./controllers/plannings/plannings.controller");
const typeorm_1 = require("@nestjs/typeorm");
const Planning_1 = require("../typeorm/entities/Planning");
const plannings_service_1 = require("./services/plannings/plannings.service");
let PlanningsModule = class PlanningsModule {
};
PlanningsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Planning_1.Planning])],
        controllers: [plannings_controller_1.PlanningsController],
        providers: [plannings_service_1.PlanningsService],
    })
], PlanningsModule);
exports.PlanningsModule = PlanningsModule;
//# sourceMappingURL=plannings.module.js.map