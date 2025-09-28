import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';

// kiểm tra thông tin đăng nhập

@Injectable() // để NestJS có thể inject class này vào module
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<any> { // Nó sẽ được Passport tự động gọi khi có request đăng nhập
    const user = await this.authService.validateUser(email, password);
    // Nếu tìm thấy user hoặc mật khẩu sai
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }
    return user;
    // Passport sẽ gắn user này vào req.user
  }
}
