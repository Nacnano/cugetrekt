import { ApiProperty } from '@nestjs/swagger';
import { Resignation } from '@prisma/client';

export class ResignationEntity implements Resignation {
  @ApiProperty()
  id: number;

  @ApiProperty()
  userId: number

  @ApiProperty()
  docsName: string;

  @ApiProperty()
  lastEdit: string;

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
  tel: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  semester: number

  @ApiProperty()
  year: string

  @ApiProperty()
  studySystem: number

  @ApiProperty()
  reason: string
}
