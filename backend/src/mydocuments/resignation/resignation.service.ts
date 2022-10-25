import { Injectable } from '@nestjs/common';
import { ResignationDto } from './dto/resignation.dto';
import { PrismaService } from '../../prisma/prisma.service';
const FPDF = require('node-fpdf');

@Injectable()
export class ResignationService {
  constructor(private prisma: PrismaService) {}

  createResignationData(resignationDto: ResignationDto) {
    resignationDto['userId'] = 1; // Demo
    return this.prisma.resignation.create({ data: resignationDto });
  }

  returnResignationData(id: number) {
    return this.prisma.resignation.findUnique({ where: { id: id } });
  }

  updateResignationData(id: number, resignationDto: ResignationDto) {
    return this.prisma.resignation.update({ where: { id: id }, data: resignationDto });
  }

  removeResignationData(id: number) {
    return this.prisma.resignation.delete({ where: { id: id } });
  }

  generateResignation(id: number) {
    const pdf = new FPDF('P', 'mm', 'A4');

    pdf.AddPage();
    pdf.SetFont('Arial', 'B', 12);
    pdf.Image('keepimg/withdrawal.jpg', 0, 0, 210, 0, '', '');
    pdf.Text(75, 150, "JomnoiZ");
    pdf.Output('F', 'src/withdrawal/' + id + '.pdf');
    return 'Done!';
  }
}
