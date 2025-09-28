import { IsEmail, IsEnum, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/user/schemas/user.schema';

export class RegisterDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'Email đăng ký tài khoản',
  }) // để hiện thị mô tả trên swagger
  @IsEmail()
  email: string; // bắt buộc email

  @ApiProperty({
    example: 'password123',
    description: 'Mật khẩu có ít nhất 6 ký tự',
    minLength: 6,
  }) // để hiện thị mô tả trên swagger
  @IsNotEmpty() // ko trống
  @MinLength(6) // ít nhất 6 kí tự
  password: string;

  @ApiProperty({
    example: 'Nguyễn Văn A',
    description: 'Tên người dùng',
  }) // để hiện thị mô tả trên swagger
  @IsNotEmpty() // ko trống
  name: string;
  @IsOptional()
  @IsEnum(Role) // nếu gửi thì giá trị phải thuộc enum Role trong user.schema
  role?: Role;
}
