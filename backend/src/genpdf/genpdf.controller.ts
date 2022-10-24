import { Controller, Get, Param } from '@nestjs/common';
import { GenpdfService } from './genpdf.service';

@Controller('genpdf')
export class GenpdfController {
  constructor(private genpdfService: GenpdfService) {}

  @Get(':id')
  generatePdf( @Param('id') id: string): string {
    return this.genpdfService.generatePdf(id);
  }
}
