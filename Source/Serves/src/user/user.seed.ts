import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { Role } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserSeeder {
    constructor(private readonly userService: UserService) { }

    async seed() {
        const users = await this.userService['userModel'].find().sort({ _id: 1 }).exec();
        const idsToKeep = users.slice(0, 2).map(u => u._id);
        await this.userService['userModel'].deleteMany({ _id: { $nin: idsToKeep } });

        // // Tạo thêm 10 user mới với mật khẩu hash sẵn
        for (let i = 0; i < 20; i++) {
            const email = `user${Date.now()}_${i}@example.com`;
            const hashedPassword = await bcrypt.hash('123456', 10);
            await this.userService.create({
                email,
                password: hashedPassword,
                name: `User ${i}`,
                phone: `0987${Math.floor(100000 + Math.random() * 899999)}`,
                city: 'Thành phố Hà Nội',
                ward: 'Phường Ô Chợ Dừa',
                address: `${i} Đường ABC`,
                role: Role.USER,
                isActive: true,
            });
        }
        console.log('✅ Seeded 10 users successfully with password 123456');
    }
}
