import { AppService } from './app.service';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
export declare class AppController {
    private readonly appService;
    private readonly userService;
    constructor(appService: AppService, userService: UserService);
    getHello(): string;
    createUser(studentId: string, password: string): Promise<UserModel>;
}
