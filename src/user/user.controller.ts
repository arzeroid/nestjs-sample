import { Controller, Get, Post, Param, Query, Body, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { DeleteResult } from 'typeorm';


@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getUsers(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    getUser(@Param('id') id: number): Promise<User> {
        return this.userService.find(id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): CreateUserDto {
        console.log(createUserDto);
        const user = this.userService.create(createUserDto);
        return;
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number): Promise<DeleteResult> {
        return this.userService.delete(id);
    }
}
