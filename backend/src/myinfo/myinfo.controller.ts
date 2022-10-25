import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MyInfoService } from './myinfo.service';
import { MyInfoDto } from './dto/myinfo.dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { MyInfoEntity } from './entities/myinfo.entity';

@Controller('myinfo')
@ApiTags('MyInfo')
export class MyInfoController {
  constructor(private readonly myinfoService: MyInfoService) {}

  @Post()
  @ApiCreatedResponse({ type: MyInfoEntity })
  create(@Body() createUserDto: MyInfoDto) {
    return this.myinfoService.create(createUserDto);
  }

  @Get(':id')
  @ApiOkResponse({ type: MyInfoEntity })
  findOne(@Param('id') id: string) {
    return this.myinfoService.findOne(+id);
  }

  @Put(':id')
  @ApiOkResponse({ type: MyInfoEntity })
  update(@Param('id') id: string, @Body() MyInfoDto: MyInfoDto) {
    return this.myinfoService.update(+id, MyInfoDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: MyInfoEntity })
  remove(@Param('id') id: string) {
    return this.myinfoService.remove(+id);
  }
}
