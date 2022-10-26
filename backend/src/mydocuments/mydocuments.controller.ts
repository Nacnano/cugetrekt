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
@Controller('MyDocuments')
@ApiTags('MyDocuments')
export class MydocumentsController {
  constructor(private mydocumentsService: MydocumentsService,
    private authController: AuthController,
    private authService: AuthService,
    private myInfoService: MyInfoService,
    ) {} 

  
  @UseGuards(JwtAuthGuard)
  async me(@Req() req: AuthGuardRequest) {
    return req.user;
  }


  @Get()
  async returnDocuments(@Req() req: AuthGuardRequest) {

    // const { email } = await this.authService.getEmail(req);
    const email = 'hi';
    
    const user = this.myInfoService.findOnebyEmail(email);
    const id = (await user).id;
    console.log(id)
    return this.mydocumentsService.returnDocuments(+id);
  }
}
