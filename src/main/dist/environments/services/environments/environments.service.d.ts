import { CreateCartographieDitwParams, UpdateCartographieDitwParams, CreateFusionDatapfProgicielParams, UpdateFusionDatapfProgicielParams } from '../../../utils/types';
import { FusionDatapfProgiciel } from '../../../typeorm/entities/FusionDatapfProgiciel';
import { CartographieDitw } from '../../../typeorm/entities/CartographieDitw';
import { FusionDatapfProgicielRepository } from '../../repository/fusionDatapfProgiciel.repository';
import { CartographieDitwRepository } from '../../repository/cartographieDitw.repository';
export declare class EnvironmentsService {
    private fusionDatapfProgicielRepository;
    private cartographieDitwRepository;
    private readonly logger;
    constructor(fusionDatapfProgicielRepository: FusionDatapfProgicielRepository, cartographieDitwRepository: CartographieDitwRepository);
    findFusionDatapfProgiciels(): Promise<FusionDatapfProgiciel[]>;
    findCartographieDitws(): Promise<CartographieDitw[]>;
    createFusionDatapfProgiciel(fusionDatapfProgiciel: CreateFusionDatapfProgicielParams): Promise<FusionDatapfProgiciel>;
    createCartographieDitw(cartographieDitw: CreateCartographieDitwParams): Promise<CartographieDitw>;
    updateFusionDatapfProgiciel(id: number, updateFusionDatapfProgicielDetails: UpdateFusionDatapfProgicielParams): Promise<import("typeorm").UpdateResult>;
    updateCartographieDitw(id: number, updateCartographieDitwDetails: UpdateCartographieDitwParams): Promise<import("typeorm").UpdateResult>;
    deleteFusionDatapfProgiciel(id: number): Promise<import("typeorm").DeleteResult>;
    deleteCartographieDitw(id: number): Promise<import("typeorm").DeleteResult>;
}
