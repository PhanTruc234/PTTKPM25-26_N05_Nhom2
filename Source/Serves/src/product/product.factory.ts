import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './schema/product.schema';
import { Types } from 'mongoose';

export class ProductFactory {
    static create(dto: CreateProductDto): Partial<Product> {
        return {
            name: dto.name,
            price: dto.price,
            categoryId: new Types.ObjectId(dto.categoryId),
            amount: dto.amount ?? 0,
            attributes: dto.attributes,
            salePercent: dto.salePercent ?? 0,
        };
    }
}