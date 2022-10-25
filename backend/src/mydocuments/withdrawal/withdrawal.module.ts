import { Module } from '@nestjs/common';
import { WithdrawalController } from './withdrawal.controller';
import { WithdrawalService } from './withdrawal.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [WithdrawalController],
  providers: [WithdrawalService],
  imports: [PrismaModule],
})
export class WithdrawalModule {}
