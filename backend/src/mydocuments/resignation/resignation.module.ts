import { Module } from '@nestjs/common';
import { ResignationController } from './resignation.controller';
import { ResignationService } from './resignation.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { MyInfoService } from 'src/myinfo/myinfo.service';

@Module({
  controllers: [ResignationController],
  providers: [ResignationService, AuthService, MyInfoService, JwtService],
  imports: [PrismaModule],
})
export class ResignationModule {}
