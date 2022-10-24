import { User } from '@prisma/client';
export declare class UserEntity implements User {
    id: number;
    email: string;
    password: string;
    title: number;
    name: string;
    surname: string;
    studentId: string;
    faculty: string;
    department: string;
    studySystem: number;
    tel: string;
    infoEmail: string;
}
