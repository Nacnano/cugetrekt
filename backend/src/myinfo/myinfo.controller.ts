import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { MyInfoService } from './myinfo.service';
import { MyInfoDto } from './dto/myinfo.dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { MyInfoEntity } from './entities/myinfo.entity';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { AuthGuardRequest } from 'src/common/dto/guard.dto';
import { AuthService } from 'src/auth/auth.service';

@Controller('myinfo')
@ApiTags('MyInfo')
export class MyInfoController {
  constructor(private readonly myinfoService: MyInfoService,
    private authService: AuthService) {}

  @Post()
  @ApiCreatedResponse({ type: MyInfoEntity })
  create(@Body() myinfoDto: MyInfoDto) {
    return this.myinfoService.create(myinfoDto);
  }

  @Get()
  @ApiOkResponse({ type: MyInfoEntity })
  @UseGuards(JwtAuthGuard)
  async findOne(@Req() req: AuthGuardRequest) {
    const res = await this.authService.getEmail(req);
    const email = res.email;
    const user = await this.myinfoService.findOnebyEmail(email);
    const id = user.id
    return this.myinfoService.findOne(id);
  }
  
  @Patch()
  @ApiOkResponse({ type: MyInfoEntity })
  @UseGuards(JwtAuthGuard)
  async update(@Body() MyInfoDto: MyInfoDto, @Req() req: AuthGuardRequest) {
    const res = await this.authService.getEmail(req);
    const email = res.email;
    const user = await this.myinfoService.findOnebyEmail(email);
    const id = user.id
    return this.myinfoService.update(id, MyInfoDto);
  }
  
  @Delete()
  @ApiOkResponse({ type: MyInfoEntity })
  @UseGuards(JwtAuthGuard)
  async remove(@Req() req: AuthGuardRequest) {
    const res = await this.authService.getEmail(req);
    const email = res.email;
    const user = await this.myinfoService.findOnebyEmail(email);
    const id = user.id
    return this.myinfoService.remove(id);
  }
}
