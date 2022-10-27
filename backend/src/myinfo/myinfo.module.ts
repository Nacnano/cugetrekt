import { Module } from '@nestjs/common';
import { MyInfoService } from './myinfo.service';
import { MyInfoController } from './myinfo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthService } from 'src/auth/auth.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [MyInfoController],
  providers: [MyInfoService, AuthService, JwtService],
  imports: [PrismaModule],
})
export class MyInfoModule {}
