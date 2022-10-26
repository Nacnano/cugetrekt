import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  Req,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiSecurity,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { ErrorDto } from 'src/common/dto/error.dto';
import { AuthGuardRequest } from 'src/common/dto/guard.dto';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { MyInfoDto } from 'src/myinfo/dto/myinfo.dto';
import { MyInfoService } from 'src/myinfo/myinfo.service';
import { AuthService } from './auth.service';
import { CredentialDto } from './dto/credential.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: MyInfoService,
  ) {}

  @Post('login')
  @HttpCode(200)
  @ApiOkResponse({ type: CredentialDto, description: 'OK' })
  @ApiBadRequestResponse({ type: ErrorDto, description: 'Bad Request' })
  @ApiUnauthorizedResponse({ type: ErrorDto, description: 'Unauthorized' })
  async login(@Body() loginDto: MyInfoDto) {
    return this.authService.login(loginDto);
  }
  
  @Get('me')
  @ApiSecurity('bearer')
  @ApiOkResponse({ type: MyInfoDto, description: 'OK' })
  @ApiUnauthorizedResponse({ type: ErrorDto, description: 'Unauthorized' })
  async me(@Req() req: AuthGuardRequest) {
    return this.authService.getEmail(req);
  }
}
