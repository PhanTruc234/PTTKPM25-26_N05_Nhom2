import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order, OrderStatus } from './schema/order.schema';
import { Types } from 'mongoose';

export class OrderFactory {
    static create(createOrderDto: CreateOrderDto): Partial<Order> {
        const totalPrice = createOrderDto.items.reduce(
            (sum, item) => sum + item.price * item.amount,
            0,
        );
        const paymentStatus =
            createOrderDto.paymentMethod === 'cod' ? 'unpaid' : 'unpaid';

        return {
            userId: new Types.ObjectId(createOrderDto.userId), // convert string -> ObjectId
            items: createOrderDto.items.map((item: CreateOrderItemDto) => ({
                productId: new Types.ObjectId(item.productId),
                amount: item.amount,
                price: item.price,
                color: item.color,
                size: item.size,
            })),
            address: createOrderDto.address,
            phone: createOrderDto.phone,
            paymentMethod: createOrderDto.paymentMethod,
            totalPrice,
            status: OrderStatus.PENDING,
            paymentStatus,
        };
    }
}

