import { Injectable, Inject } from '@nestjs/common';
import { Repository, DeleteResult } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from 'src/dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) { }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  find(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  create(createUserDto: CreateUserDto): User {
    const user = this.userRepository.create(createUserDto);

    return
  }

  delete(id: number): Promise<DeleteResult> {
    return this.userRepository.delete(id);
  }
}