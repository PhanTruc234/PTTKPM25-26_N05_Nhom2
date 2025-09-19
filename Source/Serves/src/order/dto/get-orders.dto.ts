import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, IsNumber, Min, IsEnum, IsMongoId } from 'class-validator';
import { OrderStatus } from '../schema/order.schema';

export class GetOrdersDto {
  @ApiPropertyOptional({ example: 1, description: 'Trang hiện tại' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @ApiPropertyOptional({ example: 10, description: 'Số lượng đơn hàng mỗi trang' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  limit?: number = 10;
  @ApiPropertyOptional({ example: 'COMPLETED', description: 'Trạng thái đơn hàng' })
  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus;

  @ApiPropertyOptional({ example: '60d21b4667d0d8992e610c85', description: 'UserId' })
  @IsOptional()
  @IsMongoId()
  userId?: string;
}
