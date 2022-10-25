import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
const FPDF = require('node-fpdf');

@Injectable()
export class MydocumentsService {
  constructor(private prisma: PrismaService) {}

  returnDocuments(id: number) {
    return this.prisma.resignation.findMany({ where: {id: id} });
  }

  createDocuments(id: number, docsType: string) {
    return
  }
}
