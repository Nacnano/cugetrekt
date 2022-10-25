import { Module } from '@nestjs/common';
import { MyInfoService } from './myinfo.service';
import { MyInfoController } from './myinfo.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [MyInfoController],
  providers: [MyInfoService],
  imports: [PrismaModule],
})
export class UsersModule {}
