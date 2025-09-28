import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, Min, IsNumber } from 'class-validator';

export class AddToCartDto {
  @ApiProperty({ example: '60c72b2f9eb1f8b4b8d6f8f1' })
  @IsString()
  productId: string;

  @ApiProperty({ example: 2 })
  @IsInt()
  @Min(1)
  quantity: number;

  @ApiProperty({ example: 'đen' })
  @IsString()
  color: string;

  @ApiProperty({ example: 'M' })
  @IsString()
  size: string;

  @ApiProperty({ example: 120000 })
  @IsNumber()
  price: number;
}
