import { Controller, Get, Param, Post, Patch, Delete, Body, Req, UseGuards, Res } from '@nestjs/common';
import { ResignationService } from './resignation.service';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ResignationDto } from './dto/resignation.dto';
import { ResignationEntity } from './entities/resignation.entity';
import { AuthGuardRequest } from 'src/common/dto/guard.dto';
import { AuthService } from 'src/auth/auth.service';
import { MyInfoService } from 'src/myinfo/myinfo.service';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { PrismaService } from 'src/prisma/prisma.service';

@Controller('MyDocuments/resignation')
@ApiTags('MyDocuments/resignation')
export class ResignationController {
  constructor(private resignationService: ResignationService, 
    private authService: AuthService, 
    private myInfoService: MyInfoService,
    private prisma: PrismaService
  ) {}

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
  async generateResignation( @Param('id') id: string, @Res() res: Response) {
    const data = await this.prisma.resignation.findUnique({ where: { id: +id } });
    const PDFDocument = require('pdfkit');
    const moment = require('moment');
    moment().format();

    const doc = new PDFDocument({ size: 'A4', font: 'fonts/THSarabunNew_Bold.ttf', fontSize: 10 });

    doc.image('keepimg/resignation.jpg', 0, 0, { width: 595.28 });
    doc.fillColor('#000080');

    if (data['semester'] !== null) {
      doc.text(data['semester'], 270, 152);
    }
    if (data['year'] !== null) {
      doc.text(data['year'], 380, 152);
    }

    if (data['studySystem'] === 1) {
      doc.text('/', 235.4, 174);
    }
    else if (data['studySystem'] === 2) {
      doc.text('/', 291, 174);
    }
    else if (data['studySystem'] === 3) {
      doc.text('/', 396, 174);
    }

    doc.text('ศ.ดร.สุพจน์ เตชวรสินสกุล', 108, 217.5);
    doc.text('/', 425, 206.7);

    if (data['title'] !== null) {
      if (data['title'] == 1) {
        doc.text('___', 78.5, 252.7);
        doc.text('______', 94.8, 252.7);
        doc.text('___', 125, 252.7);
      }
      else if (data['title'] == 2) {
        doc.text('_____', 100, 260);
      }
      else if (data['title'] == 3) {
        doc.text('___', 124, 260);
      }
    }
    if (data['name'] === null) {
      data['name'] = "";
    }
    if (data['surname'] === null) {
      data['surname'] = "";
    }
    doc.text(data['name'] + '  ' + data['surname'], 200, 203.5);

    if (data['studentId'] !== null) {
      doc.text(data['studentId'][0], 389, 240);
      doc.text(data['studentId'][1], 405, 240);
      doc.text(data['studentId'][2], 421.5, 240);

      doc.text(data['studentId'][3], 441.5, 240);
      doc.text(data['studentId'][4], 458, 240);
      doc.text(data['studentId'][5], 473, 240);
      doc.text(data['studentId'][6], 488.4, 240);
      doc.text(data['studentId'][7], 505, 240);

      doc.text(data['studentId'][8], 524, 240);
      doc.text(data['studentId'][9], 538.5, 240);
    }

    if (data['faculty'] !== null) {
      doc.text(data['faculty'], 60, 280.3);
    }
    if (data['department'] !== null) {
      doc.text(data['department'], 206, 280.3);
    }
    if (data['tel'] !== null) {
      doc.text(data['tel'], 355, 280.3);
    }
    if (data['email'] !== null) {
      doc.text(data['email'], 453, 280.3, { lineBreak: false });
    }

    if (data['reason'] !== null) {
      doc.text(data['reason'], 216, 312.5);
    }

    const nowDate = Date.now();
    doc.text(moment().format('L').split('/')[1], 425, 406.5);
    doc.text(moment().format('L').split('/')[0], 463, 406.5);
    doc.text(moment().format('L').split('/')[2], 494, 406.5);

    doc.pipe(res);
    doc.end();
    // return this.resignationService.generateResignation(+id);
  }
}
