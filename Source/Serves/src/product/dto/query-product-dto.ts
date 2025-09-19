// src/product/dto/product-query.dto.ts
import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumberString, IsIn } from 'class-validator';

export class ProductQueryDto {
    @ApiPropertyOptional({ description: 'Tên sản phẩm để lọc', example: 'iPhone' })
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional({ description: 'Giá tối thiểu', example: '100' })
    @IsOptional()
    @IsNumberString()
    minPrice?: string;

    @ApiPropertyOptional({ description: 'Giá tối đa', example: '1000' })
    @IsOptional()
    @IsNumberString()
    maxPrice?: string;

    @ApiPropertyOptional({ description: 'Danh mục sản phẩm', example: 'electronics' })
    @IsOptional()
    @IsString()
    category?: string;

    @ApiPropertyOptional({ description: 'Trường sắp xếp', example: 'price' })
    @IsOptional()
    @IsString()
    sortBy?: string;

    @ApiPropertyOptional({ description: 'Hướng sắp xếp (asc hoặc desc)', example: 'asc' })
    @IsOptional()
    @IsIn(['asc', 'desc'])
    order?: 'asc' | 'desc';

    @ApiProperty({ description: 'Số trang (bắt buộc)', example: '1' })
    @IsNumberString()
    page: string;

    @ApiProperty({ description: 'Số lượng bản ghi trên trang (bắt buộc)', example: '10' })
    @IsNumberString()
    limit: string;
    @ApiPropertyOptional({ example: true, description: 'Lọc sản phẩm đang giảm giá' })
    @IsOptional()
    @IsString()
    sale?: string;
}
