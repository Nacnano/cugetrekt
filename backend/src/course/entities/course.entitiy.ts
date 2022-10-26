import { ApiProperty } from '@nestjs/swagger';
import { Course } from '@prisma/client';

export class CourseEntity implements Course {
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
