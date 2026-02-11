import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, isNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Full name of the user', example: 'John Doe' })
  @IsNotEmpty()
  @IsString()
  name!: string;

  @ApiProperty({ description: 'Email address', example: 'john@example.com' })
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @ApiProperty({
    description: 'Phone number',
    example: 1234567890,
    required: false,
  })
  @IsNotEmpty()
  phone?: number;
}
