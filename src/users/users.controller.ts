import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // REQUIRMENTS :
  // POST: Create User  - - -  ✔

  // Fields: name, email, phone
  // GET: Get User By ID      - - - ✔

  // PATCH: Update User - - - ✔

  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.userService.findUserById(id);
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): string {
    console.log(createUserDto instanceof CreateUserDto);
    return 'Create User';
  }

  @Patch('/:id')
  patchUser(@Param('id') @Body() patchUserDto: PatchUserDto): string {
    console.log(patchUserDto);
    return 'Patch User';
  }
}
