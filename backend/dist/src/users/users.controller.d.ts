import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): import("@prisma/client").Prisma.Prisma__UserClient<import("@prisma/client").User, never>;
    findAll(): import("@prisma/client").PrismaPromise<import("@prisma/client").User[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__UserClient<import("@prisma/client").User, never>;
    update(id: string, updateUserDto: UpdateUserDto): import("@prisma/client").Prisma.Prisma__UserClient<import("@prisma/client").User, never>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__UserClient<import("@prisma/client").User, never>;
}
