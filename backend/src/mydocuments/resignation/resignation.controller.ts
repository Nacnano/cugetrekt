import { Controller, Get, Param, Post, Patch, Delete, Body, Req, UseGuards } from '@nestjs/common';
import { ResignationService } from './resignation.service';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ResignationDto } from './dto/resignation.dto';
import { ResignationEntity } from './entities/resignation.entity';
import { AuthGuardRequest } from 'src/common/dto/guard.dto';
import { AuthService } from 'src/auth/auth.service';
import { MyInfoService } from 'src/myinfo/myinfo.service';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';

@Controller('MyDocuments/resignation')
@ApiTags('MyDocuments/resignation')
export class ResignationController {
  constructor(private resignationService: ResignationService, 
    private authService: AuthService, 
    private myInfoService: MyInfoService) {}

  @Post()
  @ApiCreatedResponse({ type: ResignationEntity })
  @UseGuards(JwtAuthGuard)
  async createResignationData( @Body() resignationDto: ResignationDto, @Req() req: AuthGuardRequest ) {
    const res = await this.authService.getEmail(req);
    const email = res.email;
    
    const user = await this.myInfoService.findOnebyEmail(email);
    const userId = user.id;
    return this.resignationService.createResignationData(resignationDto, userId);
  }

  @Get(':id')
  @ApiOkResponse({ type: ResignationEntity })
  returnResignationData( @Param('id') id: string) {
    return this.resignationService.returnResignationData(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: ResignationEntity })
  updateResignationData( @Param('id') id: string, @Body('data') data: ResignationDto) {
    return this.resignationService.updateResignationData(+id, data);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ResignationEntity })
  removeResignationData( @Param('id') id: string) {
    return this.resignationService.removeResignationData(+id);
  }

  @Get(':id/print')
  @ApiOkResponse({ type: ResignationEntity })
  generateResignation( @Param('id') id: string) {
    return this.resignationService.generateResignation(+id);
  }
}
