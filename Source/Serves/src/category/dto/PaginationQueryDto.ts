// src/common/dto/pagination-query.dto.ts
import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class PaginationQueryDto {
  @ApiPropertyOptional({ example: 1, description: 'Trang hiện tại' })
  @IsOptional()
  @Type(() => Number)
  @IsPositive({ message: 'page must be a positive number' })
  page?: number;

  @ApiPropertyOptional({ example: 10, description: 'Số lượng mục mỗi trang' })
  @IsOptional()
  @Type(() => Number)
  @Min(1, { message: 'limit must not be less than 1' })
  limit?: number;
}
