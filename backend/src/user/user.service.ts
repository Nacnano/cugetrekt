import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async create(createUserDto: UserDto) {
    const newUser = new User();
    newUser.id = createUserDto.id;
    newUser.firstName = createUserDto.firstName;
    newUser.lastName = createUserDto.lastName;
    newUser.isActive = createUserDto.isActive;
    newUser.email = createUserDto.email;
    newUser.password = createUserDto.password;
    // Can add more columns if needed
    return this.userRepository.save(newUser);
  }

  async update(id: string, updateData: UserDto): Promise<User> {
    const dataToUpdate = await this.userRepository.findOneBy({ id });
    for (const key in updateData) {
      dataToUpdate[key] = updateData[key];
    }
    return this.userRepository.save(dataToUpdate);
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
