import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { GenpdfModule } from './genpdf/genpdf.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PrismaModule, UsersModule, GenpdfModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
