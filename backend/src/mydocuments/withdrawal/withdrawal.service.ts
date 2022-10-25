import { Injectable } from '@nestjs/common';
import { WithdrawalDto } from './dto/withdrawal.dto';
import { PrismaService } from 'src/prisma/prisma.service';
const FPDF = require('node-fpdf');
const utf8 = require('utf8');
const iconv = require('iconv-lite');
import pdfMake from "pdfmake/build/pdfmake";

@Injectable()
export class WithdrawalService {
  constructor(private prisma: PrismaService) {}

  createWithdrawalData(withdrawalDto: WithdrawalDto) {
    withdrawalDto['userId'] = 1; // Demo
    return this.prisma.withdrawal.create({ data: withdrawalDto });
  }

  returnWithdrawalData(id: number) {
    return this.prisma.withdrawal.findUnique({ where: { id: id } });
  }

  updateWithdrawalData(id: number, withdrawalDto: WithdrawalDto) {
    return this.prisma.withdrawal.update({ where: { id: id }, data: withdrawalDto });
  }

  removeWithdrawalData(id: number) {
    return this.prisma.withdrawal.delete({ where: { id: id } });
  }

  async generateWithdrawal(id: number) {
    const data = await this.prisma.withdrawal.findUnique({ where: { id: id } });
    // if (data !== null) {
    //   return 'Already had it!';
    // }

    const pdf = new FPDF('P', 'mm', 'A4');

    pdf.AddPage();
    pdf.SetFont('Arial', 'B', 10);
    // pdf.Image('keepimg/withdrawal.jpg', 0, 0, 210, 0);
    pdf.Text(10, 10, utf8.encode('ศ.ดร.สุพจน์ เตชวรสินสกุล'));
    // pdf.Text(10, 20, iconv.encode("จอม", "tis-620"));
    // pdf.Text(10, 30, iconv.decode("จอม", "tis-620"));
    pdf.Text(10, 40, 'JomnoiZ');
    pdf.Text(10, 50, 'Nacnano');
    pdf.Text(10, 60, 'Jo');
    pdf.Text(10, 70, 'Ton');
    pdf.Text(10, 80, 'Gain');
    pdf.Text(10, 90, data['studentId']);
    pdf.Output('F', 'src/withdrawal/' + id + '.pdf');

    var docDefinition = {
      content: [
        { text: 'สร้าง PDF ภาษาไทยด้วย pdfmake ', fontSize: 15 },
       ],
     };
    pdfMake.createPdf(docDefinition).open()
    return data;
  }
}
