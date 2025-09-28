import {
  Controller,
  Get,
  Query,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { Category } from './schema/category.schema';
import { PaginatedCategoryDto } from './dto/paginated-category.dto';
import { PaginationQueryDto } from './dto/PaginationQueryDto';

@ApiTags('categories')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) { }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create new category' })
  @ApiResponse({ status: 201, description: 'Category created', type: Category })
  async create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoryService.create(createCategoryDto);
  }
  @Get()
  @ApiOperation({ summary: 'Get all categories with pagination' })
  @ApiResponse({
    status: 200,
    description: 'Paginated list of categories',
    type: PaginatedCategoryDto,
  })
  async findAll(@Query() query: PaginationQueryDto): Promise<PaginatedCategoryDto> {
    const { page = 1, limit = 10 } = query;
    return this.categoryService.findAllPaginated(page, limit);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get category by id' })
  async findOne(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update category by id' })
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: Partial<CreateCategoryDto>,
  ): Promise<Category> {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete category by id' })
  async remove(@Param('id') id: string): Promise<void> {
    return this.categoryService.remove(id);
  }
}
