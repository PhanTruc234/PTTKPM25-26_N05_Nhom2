// src/order/schemas/order.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type OrderDocument = Order & Document;

export enum OrderStatus {
  PENDING = 'PENDING',
  PROCESSING = 'PROCESSING',
  SHIPPING = "SHIPPING",
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

@Schema()
export class OrderItem {
  @Prop({ type: Types.ObjectId, ref: 'Product', required: true })
  productId: Types.ObjectId;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  price: number;

  @Prop()
  color?: string;

  @Prop()
  size?: string;
}

export const OrderItemSchema = SchemaFactory.createForClass(OrderItem);

@Schema({ timestamps: true })
export class Order {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop({ type: [OrderItemSchema], required: true })
  items: OrderItem[];

  @Prop({ required: true })
  totalPrice: number;

  @Prop({ default: OrderStatus.PENDING, enum: OrderStatus })
  status: OrderStatus;

  @Prop()
  address: string;

  @Prop()
  phone: string;

  @Prop({ required: true, enum: ['cod', 'online'] })
  paymentMethod: string;

  @Prop({ required: true, enum: ['unpaid', 'pending', 'paid'], default: 'unpaid' })
  paymentStatus: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
