// src/category/dto/paginated-category.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../schema/category.schema';

export class PaginatedCategoryDto {
  @ApiProperty({ type: [Category] })
  data: Category[];

  @ApiProperty()
  total: number;

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;
}