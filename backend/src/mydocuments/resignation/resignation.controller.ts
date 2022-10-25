import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { ResignationService } from './resignation.service';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ResignationDto } from './dto/resignation.dto';
import { ResignationEntity } from './entities/resignation.entity';

@Controller('MyDocuments/resignation')
@ApiTags('MyDocuments/resignation')
export class ResignationController {
  constructor(private resignationService: ResignationService) {}

  @Post()
  @ApiCreatedResponse({ type: ResignationEntity })
  createResignationData( @Body() resignationDto: ResignationDto ) {
    return this.resignationService.createResignationData(resignationDto);
  }

  @Get(':id')
  @ApiOkResponse({ type: ResignationEntity })
  returnResignationData( @Param('id') id: string) {
    return this.resignationService.returnResignationData(+id);
  }

  @Put(':id')
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
