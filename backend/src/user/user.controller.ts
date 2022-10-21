import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { UserDto } from './user.dto';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: UserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Patch()
  async update(@Body() updateUserDto: UserDto): Promise<User> {
    return this.userService.update(updateUserDto.id, updateUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    console.log('Findall');
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    const foundUser = await this.userService.findOne(id);
    return foundUser ? foundUser : 'User not found!!!!!!!!';
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id);
  }
}
