import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './schema/product.schema';
import { Types } from 'mongoose';

export class ProductFactory {
    static create(dto: CreateProductDto): Partial<Product> {
        const basePrice = dto.price;
        const attributes: any = dto.attributes || {};

        if (attributes.color && Array.isArray(attributes.color)) {
            // Sinh variants + code
            function generateSKU(productName: string, color: string, size?: string): string {
                const productCode = productName
                    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                    .split(" ")
                    .map(w => w[0].toUpperCase())
                    .join("");
                const colorCode = color.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
                return size ? `${productCode}-${colorCode}-${size?.toUpperCase()}` : `${productCode}-${colorCode}`;
            }

            attributes.color = attributes.color.map((c: any) => {
                const sizes = c.sizes && c.sizes.length > 0 ? c.sizes : [undefined];
                const variants = sizes.map((size: string | undefined) => ({
                    size,
                    price: c.price ?? basePrice,
                    code: generateSKU(dto.name, c.name, size),
                }));
                return {
                    name: c.name,
                    variants,
                };
            });
        }

        return {
            name: dto.name,
            price: dto.price,
            categoryId: new Types.ObjectId(dto.categoryId),
            amount: dto.amount ?? 0,
            images: dto.images ?? [],
            attributes,
            description: dto.description,
            salePercent: dto.salePercent ?? 0,
        };
    }
}