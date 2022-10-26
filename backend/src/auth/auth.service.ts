import { HttpException, HttpStatus, Injectable, Req, UseGuards } from '@nestjs/common';
import { MyInfoService } from 'src/myinfo/myinfo.service';
import { JwtService } from '@nestjs/jwt';
import { MyInfoDto } from 'src/myinfo/dto/myinfo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { AuthGuardRequest } from 'src/common/dto/guard.dto';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly myInfoService: MyInfoService,
  ) {}

  async register(userDto: MyInfoDto): Promise<RegistrationStatus> {
    let status: RegistrationStatus = {
      success: true,
      message: 'ACCOUNT_CREATE_SUCCESS',
    };

    try {
      status.data = await this.myInfoService.create(userDto);
    } catch (err) {
      status = {
        success: false,
        message: err,
      };
    }
    return status;
  }

  async login(loginUserDto: MyInfoDto): Promise<any> {
    const user = await this.myInfoService.findByLogin(loginUserDto);
    const token = this._createToken(user.email);

    return {
      ...token,
      data: user,
    };
  }

  private _createToken(email): any {
    const payload = { email: email };
    const Authorization = this.jwtService.sign(payload);
    return {
      expiresIn: process.env.EXPIRESIN,
      Authorization,
    };
  }

  async validateUser(payload: any): Promise<any> {
    const user = await this.myInfoService.findByPayload(payload);
    if (!user) {
      throw new HttpException('INVALID_TOKEN', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  @UseGuards(JwtAuthGuard)
  async getEmail(@Req() req: AuthGuardRequest) {
    return req.user;
  }
}

export interface RegistrationStatus {
  success: boolean;
  message: string;
  data?: User;
}
export interface RegistrationSeederStatus {
  success: boolean;
  message: string;
  data?: User[];
}
