// src/auth/auth.service.ts
import { Injectable, UnauthorizedException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Role, User, UserDocument } from '../user/schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) { }

  async register(dto: RegisterDto): Promise<User> {
    const existing = await this.userModel.findOne({ email: dto.email }); // Kiểm tra email đã tồn tại chưa.
    if (existing) {
      throw new UnauthorizedException('Email already exists');
    }

    const hashed = await bcrypt.hash(dto.password, 10); // Hash mật khẩu với bcrypt.hash(..., 10).

    const createdUser = new this.userModel({
      ...dto,
      password: hashed,
      role: dto.role || Role.USER,
    });

    return createdUser.save();
  }
  async validateUser(email: string, pass: string): Promise<UserDocument | null> { // Mục đích: Kiểm tra thông tin đăng nhập (email + password)
    const user = await this.userModel.findOne({ email });
    if (!user) return null;

    const isMatch = await bcrypt.compare(pass, user.password);
    if (!isMatch) return null;

    return user; // Trả về document user nếu hợp lệ, ngược lại null
  }

  generateTokens(user: UserDocument): { access_token: string; refresh_token: string } {
    // sub: user._id.toString()
    const payload = { _id: user._id.toString(), email: user.email, role: user.role };
    const access_token = this.jwtService.sign(payload, {
      expiresIn: '15m',
    });
    const refresh_token = this.jwtService.sign(payload, {
      expiresIn: '7d',
    });
    return { access_token, refresh_token };
  }

  async login(dto: LoginDto): Promise<{ access_token: string; refresh_token: string; user: any }> {
    const user = await this.validateUser(dto.email, dto.password);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    //  sub: user._id.toString()
    const payload = { _id: user._id.toString(), email: user.email, role: user.role };

    const access_token = this.jwtService.sign(payload, { expiresIn: '15m' });
    const refresh_token = this.jwtService.sign(payload, { expiresIn: '7d' });

    // Lưu refresh token vào DB (hashed để bảo mật)
    const hashedRefreshToken = await bcrypt.hash(refresh_token, 10);
    await this.userModel.findByIdAndUpdate(user._id, {
      currentHashedRefreshToken: hashedRefreshToken,
      isActive: true,
    });
    return {
      access_token,
      refresh_token,
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
        isActive: true,
      },
    };
  }
  // Dùng refresh_token hợp lệ để cấp access token mới.
  async refresh(refreshToken: string): Promise<{ access_token: string; user: any }> {
    if (!refreshToken) throw new UnauthorizedException('No refresh token provided');

    let payload: any;
    try {
      payload = this.jwtService.verify(refreshToken);
    } catch (err) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    const user = await this.userModel.findOne({ email: payload.email });
    if (!user) throw new UnauthorizedException('User not found');

    const isTokenMatch = await bcrypt.compare(refreshToken, user.currentHashedRefreshToken || '');
    if (!isTokenMatch) throw new UnauthorizedException('Refresh token mismatch');

    const newAccessToken = this.jwtService.sign(
      { _id: user._id.toString(), email: user.email, role: user.role },
      { expiresIn: '15m' },
    );

    return {
      access_token: newAccessToken,
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    };
  }
  // src/auth/auth.service.ts
  async logout(userId: string): Promise<void> {
    // Ví dụ: xoá refresh token trong DB hoặc set null
    await this.userModel.findByIdAndUpdate(userId, { currentHashedRefreshToken: null, isActive: false });
  }
}