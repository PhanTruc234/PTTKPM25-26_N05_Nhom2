import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { Role } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserSeeder {
    constructor(private readonly userService: UserService) { }

    async seed() {
        const users: CreateUserDto[] = [];

        for (let i = 0; i < 200; i++) {
            users.push({
                email: `user${i}@gmail.com`,
                password: '123456',
                name: `User ${i}`,
                phone: `0987${Math.floor(100000 + Math.random() * 899999)}`,
                city: 'Hà Nội',
                ward: 'Phường Dịch Vọng',
                address: `${i} Đường ABC`,
                role: Role.ADMIN,
            });
        }
        for (const user of users) {
            await this.userService.create(user);
        }
        console.log('Seeded 50 users successfully.');
    }
}
