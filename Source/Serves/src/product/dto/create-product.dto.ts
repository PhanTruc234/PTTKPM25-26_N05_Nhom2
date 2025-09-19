import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsArray,
  IsObject,
  Min,
  Max,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Áo thun nam' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiPropertyOptional({ example: 'Áo thun cotton mềm mại' })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ example: 199000 })
  @IsNotEmpty()
  @IsNumber()
  price: number;

  @ApiProperty({ example: ['image1.jpg', 'image2.jpg'], type: [String] })
  @IsArray()
  @IsString({ each: true })
  images: string[];

  @ApiProperty({ example: '60c72b2f9eb1f8b4b8d6f8f1' })
  @IsNotEmpty()
  categoryId: string;

  @ApiPropertyOptional({ example: 10, description: 'Số lượng tồn kho' })
  @IsOptional()
  @IsNumber()
  @Min(0)
  amount?: number;

  @ApiPropertyOptional({
    example: {
      color: ['Đỏ', 'Xanh'],
      size: ['M', 'L'],
    },
    description: 'Thuộc tính sản phẩm: mỗi key là một đặc điểm, value là danh sách các giá trị',
  })
  @IsOptional()
  @IsObject()
  attributes?: Record<string, string[]>;

  @ApiPropertyOptional({
    example: 20,
    description: 'Phần trăm giảm giá (0-100)',
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  salePercent?: number;
}
