// src/order/dto/create-order.dto.ts
import { IsMongoId, IsArray, ValidateNested, IsString, IsNotEmpty, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CreateOrderItemDto } from './create-order-item.dto';

export class CreateOrderDto {
  @ApiProperty({ example: '60d21b4667d0d8992e610c84' })
  @IsMongoId()
  userId: string;

  @ApiProperty({ type: [CreateOrderItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateOrderItemDto)
  items: CreateOrderItemDto[];

  @ApiProperty({ example: 'Hà Nội, Việt Nam' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: '0123456789' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    example: 'cod',
    enum: ['cod', 'online'],
    description: 'Phương thức thanh toán: cod (thanh toán khi nhận hàng) hoặc online (chuyển khoản)',
  })
  @IsString()
  @IsIn(['cod', 'online'])
  paymentMethod: string;
}
