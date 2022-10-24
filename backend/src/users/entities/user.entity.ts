import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  title: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  surname: string;

  @ApiProperty()
  studentId: string;

  @ApiProperty()
  faculty: string;

  @ApiProperty()
  department: string;

  @ApiProperty()
  studySystem: number;

  @ApiProperty()
  tel: string;

  @ApiProperty()
  infoEmail: string;
}
