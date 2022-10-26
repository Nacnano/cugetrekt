import { Module } from '@nestjs/common';
import { WithdrawalController } from './withdrawal.controller';
import { WithdrawalService } from './withdrawal.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthService } from 'src/auth/auth.service';
import { MyInfoService } from 'src/myinfo/myinfo.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [WithdrawalController],
  providers: [WithdrawalService, AuthService, MyInfoService, JwtService],
  imports: [PrismaModule],
})
export class WithdrawalModule {}
