import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    create(createUserDto: UserDto): Promise<User>;
    update(id: string, updateData: UserDto): Promise<User>;
    remove(id: number): Promise<void>;
}
