// // src/product/dto/update-product.dto.ts
// import { PartialType } from '@nestjs/mapped-types';
// import { CreateProductDto } from './create-product.dto';
// import { IsOptional, IsString, IsNumber } from 'class-validator';

// export class UpdateProductDto extends PartialType(CreateProductDto) {
//   @IsOptional()
//   @IsString()
//   name?: string;

//   @IsOptional()
//   @IsString()
//   description?: string;

//   @IsOptional()
//   @IsNumber()
//   price?: number;

//   @IsOptional()
//   @IsString()
//   image?: string;

//   @IsOptional()
//   @IsString()
//   categoryId?: string;
// }
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {}


