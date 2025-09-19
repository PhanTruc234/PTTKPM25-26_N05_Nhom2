import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schema/product.schema';

interface ProductQuery {
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  category?: string;
  page?: number;
  limit?: number;
  sale?: string;
}
interface FilterOptions {
  name?: string;
  minPrice?: number;
  maxPrice?: number;
  category?: string;
  sale?: string;
}

interface PaginationOptions {
  page: number;
  limit: number;
  sortBy: string;
  order: 1 | -1;
  sale?: string;
}

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) { }
  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel({
      ...createProductDto,
      categoryId: new Types.ObjectId(createProductDto.categoryId),
      amount: createProductDto.amount ?? 0,
      attributes: createProductDto.attributes,
    });

    return newProduct.save();
  }
  async findAll(query: ProductQuery): Promise<{
    products: Product[];
    total: number;
    page: number;
    limit: number;
  }> {
    const filter: any = {};

    // 🔍 Filter theo tên
    if (query.name) {
      filter.name = { $regex: query.name, $options: 'i' };
    }

    // 🔍 Filter theo khoảng giá
    if (query.minPrice || query.maxPrice) {
      filter.price = {};
      if (query.minPrice !== undefined) filter.price.$gte = query.minPrice;
      if (query.maxPrice !== undefined) filter.price.$lte = query.maxPrice;
    }

    // 🔍 Filter theo danh mục
    if (query.category) {
      filter.categoryId = new Types.ObjectId(query.category);
    }

    // 🔍 Filter sản phẩm đang giảm giá

    if (query.sale && query.sale.toLowerCase() === 'true') {
      filter.salePercent = { $gt: 0 };
    }


    const page = query.page && +query.page > 0 ? +query.page : 1;
    const limit = query.limit && +query.limit > 0 ? +query.limit : 10;
    const skip = (page - 1) * limit;

    const [products, total] = await Promise.all([
      this.productModel
        .find(filter)
        .skip(skip)
        .limit(limit)
        .populate('categoryId')
        .exec(),
      this.productModel.countDocuments(filter),
    ]);

    return {
      products,
      total,
      page,
      limit,
    };
  }
  async findOne(id: string): Promise<Product> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Invalid product ID');
    }
    const product = await this.productModel
      .findById(id)
      .populate('categoryId')
      .exec();

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return product;
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const updateData: any = { ...updateProductDto };

    if (updateProductDto.categoryId) {
      updateData.categoryId = new Types.ObjectId(updateProductDto.categoryId);
    }

    if (updateProductDto.attributes) {
      updateData.attributes = new Map(
        Object.entries(updateProductDto.attributes),
      );
    }

    if (updateProductDto.amount !== undefined) {
      updateData.amount = updateProductDto.amount;
    }

    const updated = await this.productModel
      .findByIdAndUpdate(id, updateData, {
        new: true,
      })
      .populate('categoryId');

    if (!updated) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    return updated;
  }

  async remove(id: string): Promise<void> {
    const result = await this.productModel.findByIdAndDelete(id);
    if (!result) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }
  }

  async findByCategory(categoryId: string): Promise<Product[]> {
    return this.productModel
      .find({ categoryId: new Types.ObjectId(categoryId) })
      .populate('categoryId')
      .exec();
  }
  async findAllWithPagination(
    filter: FilterOptions,
    pagination: PaginationOptions,
  ): Promise<{ total: number; data: Product[] }> {
    const { name, minPrice, maxPrice, category, sale } = filter;
    const { page, limit, sortBy, order } = pagination;

    const query: any = {};

    if (name) {
      query.name = { $regex: name, $options: 'i' };
    }

    if (minPrice !== undefined || maxPrice !== undefined) {
      query.price = {};
      if (minPrice !== undefined) query.price.$gte = minPrice;
      if (maxPrice !== undefined) query.price.$lte = maxPrice;
    }

    if (category && Types.ObjectId.isValid(category)) {
      query.categoryId = new Types.ObjectId(category);
    }

    if (String(sale).toLowerCase() === 'true') {
      query.salePercent = { $gt: 0 };
    } else if (String(sale).toLowerCase() === 'false') {
      query.salePercent = { $eq: 0 };
    }

    const skip = (page - 1) * limit;

    const total = await this.productModel.countDocuments(query);

    const data = await this.productModel
      .find(query)
      .sort({ [sortBy]: order })
      .skip(skip)
      .limit(limit)
      .populate('categoryId') // Nếu muốn có thông tin category
      .exec();

    return { total, data };
  }
}
