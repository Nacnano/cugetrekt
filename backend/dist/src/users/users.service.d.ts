import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): import("@prisma/client").Prisma.Prisma__UserClient<import("@prisma/client").User, never>;
    findAll(): import("@prisma/client").PrismaPromise<import("@prisma/client").User[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__UserClient<import("@prisma/client").User, never>;
    update(id: number, updateUserDto: UpdateUserDto): import("@prisma/client").Prisma.Prisma__UserClient<import("@prisma/client").User, never>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__UserClient<import("@prisma/client").User, never>;
}
