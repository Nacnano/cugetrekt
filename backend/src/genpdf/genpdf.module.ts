import { Module } from '@nestjs/common';
import { GenpdfController } from './genpdf.controller';
import { GenpdfService } from './genpdf.service';

@Module({
  controllers: [GenpdfController],
  providers: [GenpdfService],
})
export class GenpdfModule {}
