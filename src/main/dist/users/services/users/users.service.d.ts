import { User } from '../../../typeorm/entities/User';
import { CreateUserParams } from '../../../utils/types';
import { UserRepository } from '../../repository/user.repository';
export declare class UsersService {
    private readonly userRepository;
    private readonly logger;
    constructor(userRepository: UserRepository);
    create(user: CreateUserParams): Promise<User>;
    findOne(condition: any): Promise<User>;
    findOneById(condition: any): Promise<User>;
}
