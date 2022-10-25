import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './myinfo/myinfo.module';
import { MydocumentsModule } from './mydocuments/mydocuments.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    MydocumentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
