import { CreateIndisponibilityDto } from '../../dtos/CreateIndisponibility.dto';
import { UpdateIndisponibilityDto } from '../../dtos/UpdateIndisponibility.dto';
import { IndisponibilitiesService } from '../../services/indisponibilities/indisponibilities.service';
export declare class IndisponibilitiesController {
    private indisponibilityService;
    constructor(indisponibilityService: IndisponibilitiesService);
    getindIsponibilities(): Promise<import("../../../typeorm/entities/Indisponibility").Indisponibility[]>;
    createIndisponibility(createIndisponibilityDto: CreateIndisponibilityDto): Promise<import("../../../typeorm/entities/Indisponibility").Indisponibility>;
    updateIndisponibilityById(id: number, updateIndisponibilityDto: UpdateIndisponibilityDto): Promise<void>;
    deleteIndisponibilityById(id: number): Promise<void>;
}
