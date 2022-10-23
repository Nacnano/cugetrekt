import { PrismaService } from './prisma.service';
import { Course, Prisma } from '@prisma/client';
export declare class CourseService {
    private prisma;
    constructor(prisma: PrismaService);
    course(courseWhereUniqueInput: Prisma.CourseWhereUniqueInput): Promise<Course | null>;
    courses(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.CourseWhereUniqueInput;
        where?: Prisma.CourseWhereInput;
        orderBy?: Prisma.CourseOrderByWithRelationInput;
    }): Promise<Course[]>;
    createCourse(data: Prisma.CourseCreateInput): Promise<Course>;
    updateCourse(params: {
        where: Prisma.CourseWhereUniqueInput;
        data: Prisma.CourseUpdateInput;
    }): Promise<Course>;
    deleteCourse(where: Prisma.CourseWhereUniqueInput): Promise<Course>;
}
