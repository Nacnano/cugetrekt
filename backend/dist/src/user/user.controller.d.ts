import { UserDto } from './user.dto';
import { UserService } from './user.service';
import { User } from './user.entity';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: UserDto): Promise<User>;
    update(updateUserDto: UserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<any>;
    remove(id: number): Promise<void>;
}
