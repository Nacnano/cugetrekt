import { Injectable } from '@nestjs/common';
import { CourseDto } from './dto/course.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  create(courseDto: CourseDto) {
    return this.prisma.course.create({ data: courseDto });
  }

  findAll() {
    return this.prisma.course.findMany();
  }

  findOne(id: number) {
    return this.prisma.course.findUnique({ where: { id } });
  }

  update(id: number, courseDto: CourseDto) {
    return this.prisma.course.update({ where: { id }, data: courseDto });
  }

  remove(id: number) {
    return this.prisma.course.delete({ where: { id } });
  }
}
