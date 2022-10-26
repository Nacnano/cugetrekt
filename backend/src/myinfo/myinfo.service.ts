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

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  findOnebyEmail(email: string) {
    return this.prisma.user.findFirst({ where: { email: email } });
  }

  update(id: number, myinfoDto: MyInfoDto) {
    return this.prisma.user.update({ where: { id }, data: myinfoDto });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }

  async findByLogin({ email, password }: MyInfoDto) {

    const user = await this.prisma.user.findFirst({
        where: {email: email}
    });
    if (!user) {
        throw new HttpException("no_email_found",  
              HttpStatus.UNAUTHORIZED);
    }

    const areEqual = await (password === user.password);
    if (!areEqual) {
        throw new HttpException("wrong_password",
            HttpStatus.UNAUTHORIZED);
    }

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
