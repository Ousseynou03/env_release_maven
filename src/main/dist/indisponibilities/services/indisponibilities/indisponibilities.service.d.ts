import { CreateIndisponibilityParams, UpdateIndisponibilityParams } from '../../../utils/types';
import { Indisponibility } from '../../../typeorm/entities/Indisponibility';
import { IndisponibilityRepository } from '../../../indisponibilities/repository/indisponibility.repository';
export declare class IndisponibilitiesService {
    private indisponibilityRepository;
    constructor(indisponibilityRepository: IndisponibilityRepository);
    findIndisponibilities(): Promise<Indisponibility[]>;
    createIndisponibilities(indisponibility: CreateIndisponibilityParams): Promise<Indisponibility>;
    updateIndisponibilities(id: number, updateIndisponibility: UpdateIndisponibilityParams): Promise<import("typeorm").UpdateResult>;
    deleteIndisponibility(id: number): Promise<import("typeorm").DeleteResult>;
}
