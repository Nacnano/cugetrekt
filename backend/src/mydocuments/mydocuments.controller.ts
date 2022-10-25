import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MydocumentsService } from './mydocuments.service';
import { DocumentsEntity } from './entities/documents.entity';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('MyDocuments')
@ApiTags('MyDocuments')
export class MydocumentsController {
  constructor(private mydocumentsService: MydocumentsService) {} 

  @Get(':id')
  @ApiOkResponse({ type: DocumentsEntity })
  returnDocuments( @Param('id') id: number ) {
    return this.mydocumentsService.returnDocuments(id);
  }

  @Post(':docsType')
  @ApiCreatedResponse({ type: DocumentsEntity })
  createDocuments( @Body() id: number, docsType: string) {
    return this.mydocumentsService.createDocuments(id, docsType);
  }
}
