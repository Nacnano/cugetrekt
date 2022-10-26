import { Module } from '@nestjs/common';
import { MydocumentsController } from './mydocuments.controller';
import { MydocumentsService } from './mydocuments.service';
import { WithdrawalModule } from './withdrawal/withdrawal.module';
import { ResignationModule } from './resignation/resignation.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { MyInfoService } from 'src/myinfo/myinfo.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [MydocumentsController],
  providers: [MydocumentsService, AuthController, AuthService, MyInfoService, JwtService],
  imports: [PrismaModule, WithdrawalModule, ResignationModule]
})
export class MydocumentsModule {}
