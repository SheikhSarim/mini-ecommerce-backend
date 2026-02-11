// patch-user.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class PatchUserDto extends PartialType(CreateUserDto) {
    
  @ApiPropertyOptional({ description: 'Full name of the user', example: 'John Doe' })
  name?: string;

  @ApiPropertyOptional({ description: 'Email address', example: 'john@example.com' })
  email?: string;

  @ApiPropertyOptional({ description: 'Phone number', example: 1234567890 })
  phone?: number;
}
