import { UsersService } from '../../services/users/users.service';
import { JwtService } from "@nestjs/jwt";
import { Response, Request } from 'express';
import { CreateUserDto } from '../../dtos/CreateUser.dto';
export declare class UsersController {
    private readonly usersService;
    private jwtService;
    private readonly logger;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(createUserDto: CreateUserDto): Promise<import("../../../typeorm/entities/User").User>;
    login(email: string, password: string, response: Response): Promise<void>;
    user(request: Request): Promise<{
        id: number;
        prenom: string;
        nom: string;
        tel: string;
        email: string;
        active: boolean;
        createdAt: Date;
    }>;
    logout(response: Response): Promise<{
        message: string;
    }>;
}
