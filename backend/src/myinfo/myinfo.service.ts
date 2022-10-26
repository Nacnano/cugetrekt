import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MyInfoDto } from './dto/myinfo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class MyInfoService {
  constructor(private prisma: PrismaService) {}

  async create(myinfoDto: MyInfoDto) {
    const { email, password } = myinfoDto;
    if (!email || !password)
      throw new BadRequestException(
        '`username`, `name`, and `password` is required',
      );

    const userInDb = await this.prisma.user.findFirst({
      where: { email: myinfoDto.email },
    });
    if (userInDb) {
      throw new HttpException('user_already_exist', HttpStatus.CONFLICT);
    }
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

  findByLogin({ email }: MyInfoDto) {
    return this.prisma.user.findFirst({
      where: { email: email },
    });
  }

  async findByPayload({ email }: any): Promise<any> {
    return await this.prisma.user.findFirst({
      where: { email: email },
    });
  }
}
