import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // REQUIRMENTS :
  // POST: Create User  - - -  ✔

  // Fields: name, email, phone
  // GET: Get User By ID      - - - ✔

  // PATCH: Update User - - - ✔

  @Get()
  @ApiOperation({ summary: 'Fetch all registered users' })
  @ApiResponse({
    status: 200,
    description: 'Fetch all users successfully',
    type: [CreateUserDto],
  })
  getAllUsers() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Fetch a registered user by id' })
  @ApiResponse({
    status: 200,
    description: 'Fetch user successfully',
    type: [CreateUserDto],
  })
  findById(@Param('id') id: string) {
    return this.userService.findUserById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Register new user' })
  @ApiResponse({
    status: 201,
    description: 'Registered user successfully',
    type: [CreateUserDto],
  })
  createUser(@Body() createUserDto: CreateUserDto): string {
    console.log(createUserDto instanceof CreateUserDto);
    return 'Create User';
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Patch a registered user by id' })
  @ApiResponse({
    status: 200,
    description: 'Patch user successfully',
    type: [PatchUserDto],
  })
  @ApiParam({
    name: 'id',
    type: String,
    description: 'User ID',
  })
  patchUser(@Param('id') @Body() patchUserDto: PatchUserDto): string {
    console.log(patchUserDto);
    return 'Patch User';
  }
}
