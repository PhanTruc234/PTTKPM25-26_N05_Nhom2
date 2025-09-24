// src/category/category.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category, CategoryDocument, CategorySchema } from './schema/category.schema';
import { DatabaseConnection } from 'src/common/database/database-connection';

@Injectable()
export class CategoryService {
  private categoryModel: Model<CategoryDocument>;
  constructor() {
    const db = DatabaseConnection.getInstance();
    const connection = db.getConnection();
    if (!connection.models['Category']) connection.model('Category', CategorySchema);
    this.categoryModel = connection.model<CategoryDocument>('Category');
  }
  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createdCategory = new this.categoryModel(createCategoryDto);
    return createdCategory.save();
  }

  async findAllPaginated(page: number, limit: number): Promise<{ data: Category[]; total: number; page: number; limit: number }> {
    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.categoryModel.find().skip(skip).limit(limit).exec(),
      this.categoryModel.countDocuments().exec(),
    ]);

    return {
      data,
      total,
      page,
      limit,
    };
  }

  async findOne(id: string): Promise<Category> {
    const category = await this.categoryModel.findById(id).exec();
    if (!category) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }
    return category;
  }

  async update(id: string, updateData: Partial<CreateCategoryDto>): Promise<Category> {
    const updated = await this.categoryModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
    if (!updated) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }
    return updated;
  }

  async remove(id: string): Promise<void> {
    const deleted = await this.categoryModel.findByIdAndDelete(id).exec();
    if (!deleted) {
      throw new NotFoundException(`Category with id ${id} not found`);
    }
  }
}
