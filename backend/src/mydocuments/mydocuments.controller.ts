import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { MydocumentsService } from './mydocuments.service';
import { DocumentsEntity } from './entities/documents.entity';
import { ApiTags, ApiCreatedResponse, ApiOkResponse, ApiSecurity, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { ErrorDto } from 'src/common/dto/error.dto';
import { AuthGuardRequest } from 'src/common/dto/guard.dto';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { MyInfoDto } from 'src/myinfo/dto/myinfo.dto';
import { AuthController } from 'src/auth/auth.controller';
import { MyInfoService } from 'src/myinfo/myinfo.service';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
@Controller('MyDocuments')
@ApiTags('MyDocuments')
export class MydocumentsController {
  constructor(private mydocumentsService: MydocumentsService,
    private authController: AuthController,
    private authService: AuthService,
    private myInfoService: MyInfoService,
    ) {} 

  @Get()
  @UseGuards(JwtAuthGuard)
  async returnDocuments(@Req() req: AuthGuardRequest) {

    const res = await this.authService.getEmail(req) as {email: string, id: undefined};
    const email = res.email;
    
    const user = await this.myInfoService.findOnebyEmail(email);
    const id = user.id;
    return this.mydocumentsService.returnDocuments(+id);
  }
}
