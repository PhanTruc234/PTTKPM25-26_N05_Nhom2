import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './schema/category.schema';

export class CategoryFactory {
    static create(dto: CreateCategoryDto): Partial<Category> {
        return {
            name: dto.name,
            slug: dto.slug,
            description: dto.description ?? '',
            image: dto.image ?? '',
        };
    }
}