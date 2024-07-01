import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAll() {
    return 'Users';
  }

  @Post()
  create() {
    return 'A';
  }
}
