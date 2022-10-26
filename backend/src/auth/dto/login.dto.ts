import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'john@gmail.com' })
  email: string;

  @ApiProperty({ example: 'secret' })
  password: string;
}
