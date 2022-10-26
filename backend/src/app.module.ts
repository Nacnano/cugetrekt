import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MyInfoModule } from './myinfo/myinfo.module';
import { MydocumentsModule } from './mydocuments/mydocuments.module';
import { ConfigModule } from '@nestjs/config';
import { AuthMiddleware } from './common/middlewares/auth.middleware';
import { AuthModule } from './auth/auth.module';
import { CourseModule } from './course/course.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    MyInfoModule,
    MydocumentsModule,
    ConfigModule.forRoot(),
    CourseModule,
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), '..', 'backend/src/withdrawal'),
      serveRoot: '/asset/withdrawal'
    }),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), '..', 'backend/src/resignation'),
      serveRoot: '/asset/resignation'
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configuration(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
