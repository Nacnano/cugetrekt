import { Injectable } from '@nestjs/common';
import { ResignationDto } from './dto/resignation.dto';
import { PrismaService } from '../../prisma/prisma.service';
import { MyInfoService } from 'src/myinfo/myinfo.service';
// const PDFDocument = require('pdfkit');
const moment = require('moment');
moment().format();

@Injectable()
export class ResignationService {
  constructor(
    private prisma: PrismaService,
    private myInfoService: MyInfoService
  ) {}

  async createResignationData(resignationDto: ResignationDto, userId: number) {
    const user = await this.myInfoService.findOne(userId);
    resignationDto.userId = userId;
    resignationDto.lastEdit = moment().format('L') + ' ' + moment().format('LTS');
    resignationDto.name = user.name;
    resignationDto.surname = user.surname;
    resignationDto.title = user.title;
    resignationDto.studentId = user.studentId;
    resignationDto.department = user.department;
    resignationDto.faculty = user.faculty;
    resignationDto.studySystem = user.studySystem;
    resignationDto.tel = user.tel;
    resignationDto.email = user.email;
    return this.prisma.resignation.create({ data: resignationDto });
  }

  returnResignationData(id: number) {
    return this.prisma.resignation.findUnique({ where: { id: id } });
  }

  updateResignationData(id: number, resignationDto: ResignationDto) {
    resignationDto['lastEdit'] = moment().format('L') + ' ' + moment().format('LTS');
    return this.prisma.resignation.update({ where: { id: id }, data: resignationDto });
  }

  removeResignationData(id: number) {
    return this.prisma.resignation.delete({ where: { id: id } });
  }

  // async generateResignation(id: number) {
  //   let data = await this.prisma.resignation.findUnique({ where: { id: id } });
  //   const doc = new PDFDocument({ size: 'A4', font: 'fonts/THSarabunNew_Bold.ttf', fontSize: 10 });

  //   // doc.pipe(fs.createWriteStream('src/resignation/resignation-' + id + '.pdf'));
  //   doc.image('keepimg/resignation.jpg', 0, 0, { width: 595.28 });
  //   doc.fillColor('#000080');

  //   if (data['semester'] !== null) {
  //     doc.text(data['semester'], 270, 152);
  //   }
  //   if (data['year'] !== null) {
  //     doc.text(data['year'], 380, 152);
  //   }

  //   if (data['studySystem'] === 1) {
  //     doc.text('/', 235.4, 174);
  //   }
  //   else if (data['studySystem'] === 2) {
  //     doc.text('/', 291, 174);
  //   }
  //   else if (data['studySystem'] === 3) {
  //     doc.text('/', 396, 174);
  //   }

  //   doc.text('ศ.ดร.สุพจน์ เตชวรสินสกุล', 108, 217.5);
  //   doc.text('/', 425, 206.7);

  //   if (data['title'] !== null) {
  //     if (data['title'] == 1) {
  //       doc.text('___', 78.5, 252.7);
  //       doc.text('______', 94.8, 252.7);
  //       doc.text('___', 125, 252.7);
  //     }
  //     else if (data['title'] == 2) {
  //       doc.text('_____', 100, 260);
  //     }
  //     else if (data['title'] == 3) {
  //       doc.text('___', 124, 260);
  //     }
  //   }
  //   if (data['name'] === null) {
  //     data['name'] = "";
  //   }
  //   if (data['surname'] === null) {
  //     data['surname'] = "";
  //   }
  //   doc.text(data['name'] + '  ' + data['surname'], 200, 203.5);

  //   if (data['studentId'] !== null) {
  //     doc.text(data['studentId'][0], 389, 240);
  //     doc.text(data['studentId'][1], 405, 240);
  //     doc.text(data['studentId'][2], 421.5, 240);

  //     doc.text(data['studentId'][3], 441.5, 240);
  //     doc.text(data['studentId'][4], 458, 240);
  //     doc.text(data['studentId'][5], 473, 240);
  //     doc.text(data['studentId'][6], 488.4, 240);
  //     doc.text(data['studentId'][7], 505, 240);

  //     doc.text(data['studentId'][8], 524, 240);
  //     doc.text(data['studentId'][9], 538.5, 240);
  //   }

  //   if (data['faculty'] !== null) {
  //     doc.text(data['faculty'], 60, 280.3);
  //   }
  //   if (data['department'] !== null) {
  //     doc.text(data['department'], 206, 280.3);
  //   }
  //   if (data['tel'] !== null) {
  //     doc.text(data['tel'], 355, 280.3);
  //   }
  //   if (data['email'] !== null) {
  //     doc.text(data['email'], 453, 280.3, { lineBreak: false });
  //   }

  //   if (data['reason'] !== null) {
  //     doc.text(data['reason'], 216, 312.5);
  //   }

  //   const nowDate = Date.now();
  //   doc.text(moment().format('L').split('/')[1], 425, 406.5);
  //   doc.text(moment().format('L').split('/')[0], 463, 406.5);
  //   doc.text(moment().format('L').split('/')[2], 494, 406.5);

  //   doc.end();
  //   // const url = 'localhost:3001/asset/resignation/resignation-' + id + '.pdf';
  //   const url = process.env.BACKEND_URL+'/asset/resignation/resignation-' + id + '.pdf';
  //   return { "url": `${url}` };
  // }
}
