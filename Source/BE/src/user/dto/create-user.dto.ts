import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';
import { Role } from '../schemas/user.schema';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  name: string;
  @ApiPropertyOptional({ example: '0987654321' })
    @IsOptional()
    @IsString()
    phone?: string;
  
    @ApiPropertyOptional({ example: 'Hà Nội' })
    @IsOptional()
    @IsString()
    city?: string;
  
  
    @ApiPropertyOptional({ example: 'Phường Dịch Vọng' })
    @IsOptional()
    @IsString()
    ward?: string;
  
    @ApiPropertyOptional({ example: '123 Đường ABC' })
    @IsOptional()
    @IsString()
    address?: string;

  @IsEnum(Role)
  @IsOptional()
  role?: Role; 
}