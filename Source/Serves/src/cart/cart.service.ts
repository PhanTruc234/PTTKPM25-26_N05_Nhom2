// src/cart/cart.service.ts
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Cart, CartDocument } from './schema/cart.schema';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';

@Injectable()
export class CartService {
  constructor(@InjectModel(Cart.name) private cartModel: Model<CartDocument>) { }

  async getCartByUserId(userId: string): Promise<Cart> {
    if (!Types.ObjectId.isValid(userId)) {
      throw new BadRequestException('Invalid user ID');
    }

    let cart = await this.cartModel
      .findOne({ userId })
      .populate('items.productId')
      .exec();

    if (!cart) {
      cart = new this.cartModel({ userId, items: [] });
      await cart.save();
    }

    return cart;
  }

  async addItem(userId: string, dto: AddToCartDto): Promise<Cart> {
    const { productId, quantity } = dto;
    console.log('userId:', userId);
    console.log('productId:', productId);
    if (!Types.ObjectId.isValid(userId) || !Types.ObjectId.isValid(productId))
      throw new BadRequestException('Invalid ID');

    let cart = await this.cartModel.findOne({ userId }).exec();
    if (!cart) {
      cart = new this.cartModel({ userId, items: [] });
    }

    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId,
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({ productId: new Types.ObjectId(productId), quantity });
    }

    await cart.save();
    return cart.populate('items.productId');
  }

  async updateItem(userId: string, dto: UpdateCartItemDto): Promise<Cart> {
    const { productId, quantity } = dto;
    const cart = await this.cartModel.findOne({ userId }).exec();
    if (!cart) throw new NotFoundException('Cart not found');

    const item = cart.items.find((i) => i.productId.toString() === productId);
    if (!item) throw new NotFoundException('Item not found');

    item.quantity = quantity;
    await cart.save();
    return cart.populate('items.productId');
  }

  async removeItem(userId: string, productId: string): Promise<Cart> {
    const cart = await this.cartModel.findOne({ userId }).exec();
    if (!cart) throw new NotFoundException('Cart not found');

    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== productId,
    );

    await cart.save();
    return cart.populate('items.productId');
  }

  async clearCart(userId: string): Promise<void> {
    const cart = await this.cartModel.findOne({ userId }).exec();
    if (!cart) throw new NotFoundException('Cart not found');

    cart.items = [];
    await cart.save();
  }
}
