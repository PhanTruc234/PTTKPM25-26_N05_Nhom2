import {
  Controller,
  Post,
  Body,
  Req,
  Res,
  UseGuards,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Request, Response } from 'express';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth') // hiển thị nhóm API trong Swagger
@Controller('auth') // Tất cả API sẽ bắt đầu với /auth/
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('register')
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(dto); // lưu user mới vào DB
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
    // access_token → JWT dùng để gọi API.
    // refresh_token → dùng để cấp lại access_token khi hết hạn.
    // user → thông tin người dùng.
    const { access_token, refresh_token, user } = await this.authService.login(dto);
    res.cookie('refresh_token', refresh_token, { // Lưu refresh_token vào cookie
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      path: '/auth/refresh',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 ngày sống
    });
    return { access_token, refresh_token, user };
  }

  @Post('refresh')
  async refresh(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const refreshToken = req.cookies?.refresh_token;
    const { access_token, user } = await this.authService.refresh(refreshToken);
    return { access_token, user };
  }

  @Post('logout')
  @UseGuards(JwtAuthGuard)
  async logout(@Req() req) {
    const userId = req.user._id;
    await this.authService.logout(userId);
    return { message: 'Logged out successfully', isActive: false };
  }
}
