// src/order/order.seeder.ts
import { Injectable } from '@nestjs/common';
import { OrderService } from './order.service';
import { UserService } from '../user/user.service';
import { Types } from 'mongoose';
import { OrderItem, OrderStatus } from './schema/order.schema';
import { ProductDocument } from '../product/schema/product.schema';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class OrderSeeder {
    constructor(
        private readonly orderService: OrderService,
        private readonly userService: UserService,
        private readonly productService: ProductService,
    ) { }

    async seed() {
        const orderss = await this.orderService['orderModel'].find().sort({ _id: 1 }).exec(); // sắp xếp theo _id (đơn cũ nhất đầu tiên)
        const idsToKeep = orderss.slice(0, 1).map(o => o._id); // giữ 1 đơn đầu tiên
        await this.orderService['orderModel'].deleteMany({ _id: { $nin: idsToKeep } });
        console.log('Đã xóa các order không cần thiết, giữ đơn đầu tiên');
        const users = await this.userService['userModel'].find().exec();
        if (!users.length) {
            return console.log('Chưa có user để tạo đơn hàng');
        }
        const products: ProductDocument[] = await this.productService['productModel'].find().exec();
        if (!products.length) {
            return console.log('Chưa có sản phẩm để tạo đơn hàng');
        }
        const orders: any[] = [];
        const normalUsers = users.filter(u => u?.email.split("@")[1] !== "gmail.com");
        if (!normalUsers.length) {
            return console.log('Không có user hợp lệ để tạo đơn hàng');
        }

        for (let i = 0; i < 50; i++) {
            const user = normalUsers[Math.floor(Math.random() * normalUsers.length)];
            const numItems = Math.floor(Math.random() * 5) + 1;

            const items: OrderItem[] = [];

            for (let j = 0; j < numItems; j++) {
                const product = products[Math.floor(Math.random() * products.length)];
                items.push({
                    productId: product._id as Types.ObjectId,
                    amount: Math.floor(Math.random() * 5) + 1,
                    price: product.price,
                });
            }

            const totalPrice = items.reduce((sum, item) => sum + item.price * item.amount, 0);

            const createdAt = new Date(
                2025,
                Math.floor(Math.random() * 12),
                Math.floor(Math.random() * 28) + 1
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

        await this.orderService['orderModel'].insertMany(orders);
        console.log('✅ Seeded 100 paid orders successfully!');
    }
}
