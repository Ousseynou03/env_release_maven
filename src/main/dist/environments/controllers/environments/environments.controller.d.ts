import { EnvironmentsService } from '../../services/environments/environments.service';
import { CreateCartographieDitwDto } from '../../dtos/CreateCartographieDitw.dto';
import { UpdateCartographieDitwDto } from '../../dtos/UpdateCartographieDitw.dto';
import { CreateFusionDatapfProgicielDto } from '../../dtos/CreateFusionDatapfProgiciel.dto';
import { UpdateFusionDatapfProgicielDto } from '../../dtos/UpdateFusionDatapfProgiciel.dto';
export declare class EnvironmentsController {
    private environmentService;
    constructor(environmentService: EnvironmentsService);
    getFusionDatapfProgiciels(): Promise<import("../../../typeorm/entities/FusionDatapfProgiciel").FusionDatapfProgiciel[]>;
    getCartographieDitws(): Promise<import("../../../typeorm/entities/CartographieDitw").CartographieDitw[]>;
    createFusionDatapfProgiciel(createFusionDatapfProgicielDto: CreateFusionDatapfProgicielDto): Promise<import("../../../typeorm/entities/FusionDatapfProgiciel").FusionDatapfProgiciel>;
    createCartographieDitw(createCartographieDitwDto: CreateCartographieDitwDto): Promise<import("../../../typeorm/entities/CartographieDitw").CartographieDitw>;
    updateFusionDatapfProgicielById(id: number, updateFusionDatapfProgicielDto: UpdateFusionDatapfProgicielDto): Promise<void>;
    updateCartographieDitwById(id: number, updateCartographieDitwDto: UpdateCartographieDitwDto): Promise<void>;
    deleteFusionDatapfProgicielById(id: number): Promise<void>;
    deleteCartographieDitwById(id: number): Promise<void>;
}
