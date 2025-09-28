// src/cart/dto/update-cart-item.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsInt, Min } from 'class-validator';

export class UpdateCartItemDto {
  @ApiProperty({ example: '60c72b2f9eb1f8b4b8d6f8f1' })
  @IsMongoId()
  productId: string;
  
  @ApiProperty({ example: 2 })
  @IsInt()
  @Min(1)
  quantity: number;
}
