import { ApiProperty } from '@nestjs/swagger';

export class ErrorDto {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;

  @ApiProperty()
  error: string;
}
