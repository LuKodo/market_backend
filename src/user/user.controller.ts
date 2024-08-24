import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { encryptData } from './encrypt';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  login(@Body() body: Partial<User>) {
    return this.userService.login(body);
  }

  @Get(':password')
  findAll(@Param('password') password: string) {
    return encryptData(password).toString();
  }
}
