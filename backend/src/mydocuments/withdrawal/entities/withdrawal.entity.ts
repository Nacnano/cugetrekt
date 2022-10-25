import { Withdrawal } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class WithdrawalEntity implements Withdrawal {
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
  gpax: string

  @ApiProperty()
  status: number

  @ApiProperty()
  credit: number

  @ApiProperty()
  semester: number

  @ApiProperty()
  year: string

  @ApiProperty()
  studySystem: number

  @ApiProperty()
  course1: string

  @ApiProperty()
  course2: string

  @ApiProperty()
  course3: string

  @ApiProperty()
  reason1: string

  @ApiProperty()
  reason2: string

  @ApiProperty()
  reason3: string
}
