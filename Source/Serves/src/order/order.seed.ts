// src/order/order.seeder.ts
import { Injectable } from '@nestjs/common';
import { OrderService } from './order.service';
import { UserService } from '../user/user.service';
import { Types } from 'mongoose';
import { OrderItem, OrderStatus } from './schema/order.schema';
// import { OrderStatus } from './schemas/order.schema';

@Injectable()
export class OrderSeeder {
    constructor(
        private readonly orderService: OrderService,
        private readonly userService: UserService,
    ) { }

    async seed() {
        const users = await this.userService['userModel'].find().exec();
        if (!users.length) return console.log('⚠️ Chưa có user để tạo đơn hàng');

        const productIds = ['P01', 'P02', 'P03', 'P04', 'P05', 'P06', 'P07', 'P08', 'P09', 'P10'];

        const orders: any[] = []; // dùng any để tránh lỗi createdAt

        for (let i = 0; i < 500; i++) {
            const user = users[Math.floor(Math.random() * users.length)];
            const numItems = Math.floor(Math.random() * 5) + 1;

            const items: OrderItem[] = [];
            for (let j = 0; j < numItems; j++) {
                items.push({
                    productId: new Types.ObjectId(), // ObjectId hợp lệ
                    amount: Math.floor(Math.random() * 5) + 1,
                    price: Math.floor(Math.random() * 100000) + 10000,
                });
            }

            const totalPrice = items.reduce((sum, item) => sum + item.price * item.amount, 0);

            // Ngày ngẫu nhiên rải đều trong năm 2025
            const createdAt = new Date(
                2025,
                Math.floor(Math.random() * 12),       // month 0-11
                Math.floor(Math.random() * 28) + 1    // day 1-28
            );

            orders.push({
                userId: user._id,
                items,
                address: 'Hà Nội, Việt Nam',
                phone: '0987' + Math.floor(100000 + Math.random() * 899999),
                paymentMethod: 'online',
                totalPrice,
                status: OrderStatus.PROCESSING,
                paymentStatus: 'paid',
                createdAt,
                updatedAt: createdAt,
            });
        }

        // insertMany dùng any nên TS không còn báo lỗi
        await this.orderService['orderModel'].insertMany(orders);
        console.log('✅ Seeded 500 paid orders successfully!');
    }
}
