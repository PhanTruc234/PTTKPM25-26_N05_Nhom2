// src/order/dto/create-order-item.dto.ts
import { IsMongoId, IsNumber, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderItemDto {
  @ApiProperty({ example: '60d21b4667d0d8992e610c85' })
  @IsMongoId()
  productId: string;

  @ApiProperty({ example: 2 })
  @IsNumber()
  @Min(1)
  amount: number;

  @ApiProperty({ example: 50000 })
  @IsNumber()
  price: number;
}
