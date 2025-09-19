// src/order/dto/update-order.dto.ts
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { OrderStatus } from '../schema/order.schema';

export class UpdateOrderDto {
  @ApiPropertyOptional({ enum: OrderStatus })
  @IsEnum(OrderStatus)
  @IsOptional()
  status?: OrderStatus;
  @IsOptional()
  @IsString()
  paymentStatus?: string;
}
