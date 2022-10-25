import { ApiProperty } from '@nestjs/swagger';

export class ResignationDto {
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
