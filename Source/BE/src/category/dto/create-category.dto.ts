// src/category/dto/create-category.dto.ts
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({
    example: 'Áo Polo',
    description: 'Tên danh mục sản phẩm',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'ao-polo',
    description: 'Slug của danh mục (dùng cho URL)',
  })
  @IsNotEmpty()
  @IsString()
  slug: string;

  @ApiProperty({
    example: 'Các loại áo Polo cao cấp',
    description: 'Mô tả danh mục',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: 'https://product.hstatic.net/...jpg',
    description: 'URL ảnh đại diện của danh mục',
    required: false,
  })
  @IsOptional()
  @IsString()
  image?: string;
}
