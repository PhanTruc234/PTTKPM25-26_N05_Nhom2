import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ type: [{ type: String }] })
  images: string[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
  categoryId: mongoose.Types.ObjectId;

  @Prop({ required: true, default: 0 })
  amount: number;


  @Prop({ type: Object, default: {} })
  attributes: Record<string, any>;

  @Prop({ type: Number, default: 0 })
  salePercent: number;

  @Prop()
  priceAfterSale: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
