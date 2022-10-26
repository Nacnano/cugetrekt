import { Injectable } from '@nestjs/common';
import { MyInfoDto } from './dto/myinfo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MyInfoService {
  constructor(private prisma: PrismaService) {}

  create(myinfoDto: MyInfoDto) {
    return this.prisma.user.create({ data: myinfoDto });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, myinfoDto: MyInfoDto) {
    return this.prisma.user.update({ where: { id }, data: myinfoDto });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
