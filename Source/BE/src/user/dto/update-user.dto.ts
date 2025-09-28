// src/user/dto/update-user.dto.ts
import { IsEmail, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
export class UpdateUserDto {

  @ApiPropertyOptional({ example: 'newemail@example.com' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({ example: 'Nguyen Van A' })
  @IsString()
  @IsOptional()
  name?: string;
  
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

}
