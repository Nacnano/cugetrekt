import { User } from '@prisma/client';
export declare class UserEntity implements User {
    id: number;
    studentId: string;
    title: string;
    firstName: string;
    sirName: string;
    createdAt: Date;
    updatedAt: Date;
}
