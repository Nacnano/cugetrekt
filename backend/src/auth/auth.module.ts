import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MyInfoModule } from 'src/myinfo/myinfo.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
import { MyInfoService } from 'src/myinfo/myinfo.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [
    MyInfoModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: process.env.SECRETKEY,
      signOptions: {
        expiresIn: process.env.EXPIRESIN,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, MyInfoService, JwtStrategy, PrismaService],
  exports: [PassportModule, JwtModule],
})
export class AuthModule {}
