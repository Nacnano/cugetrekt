import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
const FPDF = require('node-fpdf');

@Injectable()
export class MydocumentsService {
  constructor(private prisma: PrismaService) {}

  async returnDocuments(id: number) {
    const result1 = await this.prisma.withdrawal.findMany({ 
      where: {userId: id}, 
      select: {
        id: true,
        docsName: true,
        course1: true,
        course2: true,
        course3: true,
        lastEdit: true,
      } 
    })
    const result2 = await this.prisma.resignation.findMany({ 
      where: {userId: id}, 
      select: {
        id: true,
        docsName: true,
        lastEdit: true,
      } 
    });
    return [...result1, ...result2];
  }
}
