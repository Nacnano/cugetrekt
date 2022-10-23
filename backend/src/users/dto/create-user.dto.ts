import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  studentId: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  sirName: string;
}
