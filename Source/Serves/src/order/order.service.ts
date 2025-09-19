// src/order/order.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order, OrderDocument, OrderStatus } from './schema/order.schema';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) { }

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const totalPrice = createOrderDto.items.reduce((sum, item) => sum + item.price * item.amount, 0);
    const paymentStatus =
      createOrderDto.paymentMethod === 'cod' ? 'unpaid' : 'unpaid';
    const createdOrder = new this.orderModel({
      ...createOrderDto,
      items: createOrderDto.items.map(item => ({
        productId: new Types.ObjectId(item.productId),
        amount: item.amount,
        price: item.price,
      })),
      totalPrice,
      status: OrderStatus.PENDING,
      paymentStatus
    });
    return createdOrder.save();
  }

  async findAll(
    page = 1,
    limit = 10,
    filters: { status?: string; userId?: string } = {},
  ): Promise<{ data: Order[]; total: number; page: number; limit: number }> {
    const skip = (page - 1) * limit;
    const query: any = {};

    if (filters.status) {
      query.status = filters.status;
    }
    if (filters.userId) {
      query.userId = filters.userId;
    }

    const [data, total] = await Promise.all([
      this.orderModel
        .find(query)
        .populate('userId')
        .populate('items.productId')
        .skip(skip)
        .limit(limit)
        .exec(),
      this.orderModel.countDocuments(query),
    ]);

    return { data, total, page, limit };
  }
  async findOne(id: string): Promise<Order> {
    const order = await this.orderModel.findById(id).populate('userId').populate('items.productId').exec();
    if (!order) throw new NotFoundException(`Order with ID ${id} not found`);
    return order;
  }

  async update(id: string, updateOrderDto: UpdateOrderDto): Promise<Order> {
    const updated = await this.orderModel.findByIdAndUpdate(id, updateOrderDto, { new: true });
    if (!updated) throw new NotFoundException(`Order with ID ${id} not found`);
    return updated;
  }

  async remove(id: string): Promise<void> {
    const deleted = await this.orderModel.findByIdAndDelete(id);
    if (!deleted) throw new NotFoundException(`Order with ID ${id} not found`);
  }
  async getMonthlyRevenue(year: number): Promise<any[]> {
    const result = await this.orderModel.aggregate([
      {
        $match: {
          paymentStatus: "paid",
          createdAt: {
            $gte: new Date(`${year}-01-01T00:00:00.000Z`),
            $lte: new Date(`${year}-12-31T23:59:59.999Z`)
          }
        }
      },
      {
        $group: {
          _id: { $month: "$createdAt" },
          totalRevenue: { $sum: "$totalPrice" },
          count: { $sum: 1 }
        }
      },
      { $sort: { "_id": 1 } }
    ]);
    return result.map(item => ({
      month: item._id,
      revenue: item.totalRevenue,
      orders: item.count
    }));
  }
}
