import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { Role } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserSeeder {
    constructor(private readonly userService: UserService) { }

    async seed() {
        // Tạo thêm 10 user mới với mật khẩu hash sẵn
        for (let i = 0; i < 20; i++) {
            const email = `user${Date.now()}_${i}@example.com`;
            const hashedPassword = await bcrypt.hash('123456', 10);
            await this.userService.create({
                email,
                password: hashedPassword,
                name: `User ${i}`,
                phone: `0987${Math.floor(100000 + Math.random() * 899999)}`,
                city: 'Hà Nội',
                ward: 'Phường Dịch Vọng',
                address: `${i} Đường ABC`,
                role: Role.ADMIN,
                isActive: true,
            });
        }
        console.log('✅ Seeded 10 users successfully with password 123456');
    }
}
