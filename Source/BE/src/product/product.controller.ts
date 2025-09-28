// src/product/product.controller.ts
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  Query,
  UseGuards,
  UploadedFile,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schema/product.schema';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from 'fs';
import { ProductQueryDto } from './dto/query-product-dto';

const uploadDir = './uploads/products';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }
  @Get()
  async findAll(@Query() query: ProductQueryDto) {
    const filterOptions = {
      name: query.name,
      minPrice: query.minPrice ? parseFloat(query.minPrice) : undefined,
      maxPrice: query.maxPrice ? parseFloat(query.maxPrice) : undefined,
      category: query.category,
      sale: query.sale,
    };

    const page = parseInt(query.page) || 1;
    const limit = parseInt(query.limit) || 10;
    const sortBy = query.sortBy || 'createdAt';
    const order = query.order === 'desc' ? -1 : 1;

    const result = await this.productService.findAllWithPagination(
      filterOptions,
      { page, limit, sortBy, order },
    );

    return {
      total: result.total,
      page,
      limit,
      products: result.data,
    };
  }

  // Public API - không cần auth
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne(id);
  }

  // Public API - không cần auth
  @Get('category/:categoryId')
  async findByCategory(
    @Param('categoryId') categoryId: string,
  ): Promise<Product[]> {
    return this.productService.findByCategory(categoryId);
  }

  // Các API thay đổi dữ liệu cần xác thực
  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.update(id, updateProductDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async patch(
    @Param('id') id: string,
    @Body() dto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string): Promise<void> {
    return this.productService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('upload')
  @HttpCode(HttpStatus.CREATED)
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: uploadDir,
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
      limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
      },
      fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
          return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
      },
    }),
  )
  uploadImages(@UploadedFiles() files: Express.Multer.File[]) {
    return files.map((file) => ({
      filename: file.filename,
      url: `/uploads/products/${file.filename}`,
      message: 'Upload thành công',
    }));
  }
}
