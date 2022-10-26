import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseDto } from './dto/course.dto';
import { CourseEntity } from './entities/course.entitiy';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@Controller('Course')
@ApiTags('Course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  @ApiCreatedResponse({ type: CourseEntity })
  create(@Body() courseDto: CourseDto) {
    return this.courseService.create(courseDto);
  }

  @Get()
  @ApiOkResponse({ type: CourseEntity })
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: CourseEntity })
  findOne( @Param('id') id: string) {
    return this.courseService.findOne(+id);
  }

  @Put(':id')
  @ApiOkResponse({ type: CourseEntity })
  update( @Param('id') id: string, @Body() courseDto: CourseDto) {
    return this.courseService.update(+id, courseDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: CourseEntity })
  remove( @Param('id') id: string) {
    return this.courseService.remove(+id);
  }
}
