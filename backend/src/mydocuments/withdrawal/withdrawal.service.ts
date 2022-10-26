import { Injectable, Req, UseGuards } from '@nestjs/common';
import { WithdrawalDto } from './dto/withdrawal.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuardRequest } from 'src/common/dto/guard.dto';
import { JwtAuthGuard } from 'src/common/guards/auth.guard';
import { MyInfoService } from 'src/myinfo/myinfo.service';
const PDFDocument = require('pdfkit');
const fs = require('fs');
const moment = require('moment');
moment().format();

@Injectable()
export class WithdrawalService {
  constructor(private prisma: PrismaService, 
    private authService: AuthService,
    private myInfoService: MyInfoService) {}

  
  async createWithdrawalData(withdrawalDto: WithdrawalDto, userId: number) {
    withdrawalDto['userId'] = userId;
    withdrawalDto['lastEdit'] = moment().format('L') + ' ' + moment().format('LTS');
    return this.prisma.withdrawal.create({ data: withdrawalDto });
  }

  returnWithdrawalData(id: number) {
    return this.prisma.withdrawal.findUnique({ where: { id: id } });
  }

  updateWithdrawalData(id: number, withdrawalDto: WithdrawalDto) {
    withdrawalDto['lastEdit'] = moment().format('L') + ' ' + moment().format('LTS');
    return this.prisma.withdrawal.update({ where: { id: id }, data: withdrawalDto });
  }

  removeWithdrawalData(id: number) {
    return this.prisma.withdrawal.delete({ where: { id: id } });
  }

  async generateWithdrawal(id: number) {
    let data = await this.prisma.withdrawal.findUnique({ where: { id: id } });
    const doc = new PDFDocument({ size: 'A4', font: 'fonts/THSarabunNew Bold.ttf', fontSize: 10 });

    doc.pipe(fs.createWriteStream('src/withdrawal/withdrawal-' + id + '.pdf'));
    // doc.image('keepimg/withdrawal.jpg', 0, 0, { width: 595.28 });
    // doc.fillColor('#000080');

    // if (data['semester'] !== null) {
    //   doc.text(data['semester'], 270, 127);
    // }
    // if (data['year'] !== null) {
    //   doc.text(data['year'], 380, 127);
    // }

    // if (data['studySystem'] === 1) {
    //   doc.text('/', 235.4, 147.5);
    // }
    // else if (data['studySystem'] === 2) {
    //   doc.text('/', 291, 147.5);
    // }
    // else if (data['studySystem'] === 3) {
    //   doc.text('/', 396, 147.5);
    // }

    // doc.text('ศ.ดร.สุพจน์ เตชวรสินสกุล', 108, 178.5);

    // if (data['title'] === 1) {
    //   doc.text('___', 111.3, 204.5);
    // }
    // else if (data['title'] === 2) {
    //   doc.text('_____', 129, 204.5);
    // }
    // else if (data['title'] === 3) {
    //   doc.text('___', 154, 204.5);
    // }
    // if (data['name'] === null) {
    //   data['name'] = "";
    // }
    // if (data['surname'] === null) {
    //   data['surname'] = "";
    // }
    // doc.text(data['name'] + '  ' + data['surname'], 200, 203.5);

    // if (data['studentId'] !== null) {
    //   doc.text(data['studentId'][0], 396, 201);
    //   doc.text(data['studentId'][1], 412, 201);
    //   doc.text(data['studentId'][2], 427, 201);

    //   doc.text(data['studentId'][3], 450, 201);
    //   doc.text(data['studentId'][4], 465, 201);
    //   doc.text(data['studentId'][5], 481, 201);
    //   doc.text(data['studentId'][6], 497, 201);
    //   doc.text(data['studentId'][7], 512, 201);

    //   doc.text(data['studentId'][8], 535, 201);
    //   doc.text(data['studentId'][9], 550, 201);
    // }

    // if (data['faculty'] !== null) {
    //   doc.text(data['faculty'], 60, 232.5);
    // }
    // if (data['department'] !== null) {
    //   doc.text(data['department'], 217, 232.5);
    // }
    // if (data['tel'] !== null) {
    //   doc.text(data['tel'], 355, 232.5);
    // }
    // if (data['email'] !== null) {
    //   doc.text(data['email'], 453, 232.5, { lineBreak: false });
    // }

    // if (data['gpax'] !== null) {
    //   doc.text(data['gpax'], 135, 255.5);
    // }
    // if (data['status'] == 1) {
    //   doc.text('/', 348, 259);
    // }
    // else if (data['status'] == 2) {
    //   doc.text('/', 398, 259);
    // }

    // if (data['credit'] !== null) {
    //   doc.text(data['credit'], 200, 279);
    // }

    // let sumCredit = 0.0;
    // if (data['course1'] !== null && data['course1'] !== "") {
    //   const course1 = await this.prisma.course.findUnique({ where: { courseId: data['course1']} });
    //   doc.text(data['course1'], 45, 359);
    //   doc.text(data['reason1'], 177, 359);
    //   if(course1 !== null) {
    //     doc.text(course1['courseAbbr'], 100, 359);
    //     sumCredit += course1['credit'];
    //   }
    // }
    // if (data['course2'] !== null && data['course2'] !== "") {
    //   const course2 = await this.prisma.course.findUnique({ where: { courseId: data['course2']} });
    //   doc.text(data['course2'], 45, 375);
    //   doc.text(data['reason2'], 177, 375);
    //   if (course2 !== null) {
    //     doc.text(course2['courseAbbr'], 100, 375);
    //     sumCredit += course2['credit'];
    //   }
    // }
    // if (data['course3'] !== null && data['course3'] !== "") {
    //   const course3 = await this.prisma.course.findUnique({ where: { courseId: data['course3']} });
    //   doc.text(data['course3'], 45, 392);
    //   doc.text(data['reason3'], 177, 392);
    //   if (course3 !== null) {
    //     doc.text(course3['courseAbbr'], 100, 392);
    //     sumCredit += course3['credit'];
    //   }
    // }

    // if (data['credit'] - sumCredit >= 9) {
    //   doc.text('/', 40, 427);
    // }
    // else {
    //   doc.text('/', 129, 427);
    // }

    // const nowDate = Date.now();
    // doc.text(moment().format('L').split('/')[1], 445, 493.5);
    // doc.text(moment().format('L').split('/')[0], 490, 493.5);
    // doc.text(moment().format('L').split('/')[2], 528, 493.5);

    doc.end();
    // const url = 'localhost:3001/asset/withdrawal/withdrawal-' + id + '.pdf';
    const url = 'https://cugetrekt-backend-lgnud3ncza-as.a.run.app/asset/withdrawal/withdrawal-' + id + '.pdf';
    return { "url": `${url}` };
  }
}
