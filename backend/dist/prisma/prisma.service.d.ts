import { INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
export declare class PrismaService extends PrismaClient {
    enableShutdownHooks(app: INestApplication): Promise<void>;
}
