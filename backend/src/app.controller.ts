import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { User as UserModel } from '@prisma/client'

@Controller()
export class AppController {
  constructor( private readonly appService: AppService ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get(':id')
  // sayJomnoi( @Param('id') id: string ): string {
  //   return this.appService.sayJomnoi(id);
  // }
}
