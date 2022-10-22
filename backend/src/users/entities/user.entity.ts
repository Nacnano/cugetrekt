import { User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  studentId: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  sirName: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
