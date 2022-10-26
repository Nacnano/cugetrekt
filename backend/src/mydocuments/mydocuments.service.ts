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

    for (let i = 0; i < result1.length; i++) {
      result1[i]["docsType"] = 0;
    }

    const result2 = await this.prisma.resignation.findMany({ 
      where: {userId: id}, 
      select: {
        id: true,
        docsName: true,
        lastEdit: true,
      } 
    });

    for (let i = 0; i < result2.length; i++) {
      result2[i]["docsType"] = 1;
    }

    return [...result1, ...result2];
  }
}
