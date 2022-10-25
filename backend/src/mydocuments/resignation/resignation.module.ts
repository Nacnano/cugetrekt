import { Module } from '@nestjs/common';
import { ResignationController } from './resignation.controller';
import { ResignationService } from './resignation.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ResignationController],
  providers: [ResignationService],
  imports: [PrismaModule],
})
export class ResignationModule {}
