import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
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
