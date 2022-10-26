import { ApiProperty } from '@nestjs/swagger';

export class CourseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  courseId: string;

  @ApiProperty()
  courseName: string;

  @ApiProperty()
  courseAbbr: string;

  @ApiProperty()
  credit: number;
}
