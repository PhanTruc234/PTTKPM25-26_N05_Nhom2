import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'Email đăng nhập',
  }) // để hiện thị mô tả trên swagger
  @IsEmail()
  email: string; // bắt buộc phải đúng định dạng email

  @ApiProperty({
    example: 'password123',
    description: 'Mật khẩu tối thiểu 6 ký tự',
    minLength: 6,
  }) // để hiện thị mô tả trên swagger
  @IsNotEmpty() // ko đc để trống
  @MinLength(6) // ít nhất 6 kí tự
  password: string;
}
