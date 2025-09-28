// src/order/order.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body, HttpCode, HttpStatus, Query } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './schema/order.schema';
import { Roles } from 'src/common/decorators/roles.decorator';
import { Role } from 'src/user/schemas/user.schema';
import { GetOrdersDto } from './dto/get-orders.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) { }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.orderService.create(createOrderDto);
  }

  @Get()
  async findAll(@Query() query: GetOrdersDto) {
    const { page, limit, status, userId } = query;
    return this.orderService.findAll(page, limit, { status, userId });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Order> {
    return this.orderService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto): Promise<Order> {
    return this.orderService.update(id, updateOrderDto);
  }
  @Put(':id/status')
  @Roles(Role.ADMIN)
  async updateStatus(
    @Param('id') id: string,
    @Body() updateStatusDto: UpdateOrderDto,
  ): Promise<Order> {
    return this.orderService.update(id, updateStatusDto);
  }
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string): Promise<void> {
    return this.orderService.remove(id);
  }
  @Get('revenue/:year')
  async getRevenue(@Param('year') year: string) {
    return this.orderService.getMonthlyRevenue(Number(year));
  }
  @Get('user/:userId')
  async findByUser(@Param('userId') userId: string) {
    return this.orderService.findByUser(userId);
  }
}
