"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const Planning_1 = require("./typeorm/entities/Planning");
const plannings_module_1 = require("./plannings/plannings.module");
const tasks_module_1 = require("./tasks/tasks.module");
const activities_module_1 = require("./activities/activities.module");
const Activity_1 = require("./typeorm/entities/Activity");
const Indisponibility_1 = require("./typeorm/entities/Indisponibility");
const CartographieDitw_1 = require("./typeorm/entities/CartographieDitw");
const FusionDatapfProgiciel_1 = require("./typeorm/entities/FusionDatapfProgiciel");
const indisponibilities_module_1 = require("./indisponibilities/indisponibilities.module");
const environments_module_1 = require("./environments/environments.module");
const Task_1 = require("./typeorm/entities/Task");
const User_1 = require("./typeorm/entities/User");
const users_module_1 = require("./users/users.module");
const anomalie_entity_1 = require("./typeorm/entities/testingManage/anomalie.entity");
const casDeTest_entity_1 = require("./typeorm/entities/testingManage/casDeTest.entity");
const scenarioDeTest_entity_1 = require("./typeorm/entities/testingManage/scenarioDeTest.entity");
const releas_entity_1 = require("./typeorm/entities/testingManage/releas.entity");
const testeur_entity_1 = require("./typeorm/entities/testingManage/testeur.entity");
const ticket_entity_1 = require("./typeorm/entities/testingManage/ticket.entity");
const anomalie_module_1 = require("./anomalie/anomalie.module");
const cas_de_test_module_1 = require("./cas-de-test/cas-de-test.module");
const releas_module_1 = require("./releas/releas.module");
const scenario_de_test_module_1 = require("./scenario-de-test/scenario-de-test.module");
const testeur_module_1 = require("./testeur/testeur.module");
const ticket_module_1 = require("./ticket/ticket.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: () => ({
                    type: 'mysql',
                    host: 'localhost',
                    port: 3306,
                    username: 'root',
                    password: '',
                    database: 'env_release_management',
                    entities: [Planning_1.Planning, Task_1.Task, Activity_1.Activity, Indisponibility_1.Indisponibility, CartographieDitw_1.CartographieDitw, FusionDatapfProgiciel_1.FusionDatapfProgiciel, User_1.User, anomalie_entity_1.Anomalie, casDeTest_entity_1.CasDeTest, scenarioDeTest_entity_1.ScenarioDeTest, releas_entity_1.Releas, testeur_entity_1.Testeur, ticket_entity_1.Ticket],
                    synchronize: true,
                }),
            }),
            plannings_module_1.PlanningsModule,
            tasks_module_1.TasksModule,
            activities_module_1.ActivitiesModule,
            indisponibilities_module_1.IndisponibilitiesModule,
            environments_module_1.EnvironmentsModule,
            users_module_1.UsersModule,
            anomalie_module_1.AnomalieModule,
            cas_de_test_module_1.CasDeTestModule,
            releas_module_1.ReleasModule,
            scenario_de_test_module_1.ScenarioDeTestModule,
            testeur_module_1.TesteurModule,
            ticket_module_1.TicketModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map