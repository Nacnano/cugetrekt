import { Module } from '@nestjs/common';
import { MydocumentsController } from './mydocuments.controller';
import { MydocumentsService } from './mydocuments.service';
import { WithdrawalModule } from './withdrawal/withdrawal.module';
import { ResignationModule } from './resignation/resignation.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MydocumentsController],
  providers: [MydocumentsService],
  imports: [PrismaModule, WithdrawalModule, ResignationModule]
})
export class MydocumentsModule {}
