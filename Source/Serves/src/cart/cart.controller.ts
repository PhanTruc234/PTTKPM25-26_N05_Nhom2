import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Req,
  Param,
  Body,
  UseGuards,
  HttpCode,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Request } from 'express';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@ApiTags('Cart')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Get()
  @ApiOperation({ summary: 'Get user cart' })
  @ApiResponse({ status: 200 })
  async getCart(@Req() req: Request) {
    const user = req.user as any;
    if (!user?._id) throw new BadRequestException('User information is missing');
    return this.cartService.getCartByUserId(user._id);
  }

  @Post('add')
  @ApiOperation({ summary: 'Add item to cart' })
  @ApiResponse({ status: 201 })
  async addItem(@Req() req: Request, @Body() dto: AddToCartDto) {
    const user = req.user as any;
    console.log(user,"nghiemm"); 
    return this.cartService.addItem(user._id, dto);
  }

  @Patch('update')
  @ApiOperation({ summary: 'Update item quantity' })
  @ApiResponse({ status: 200 })
  async updateItem(@Req() req: Request, @Body() dto: UpdateCartItemDto) {
    const user = req.user as any;
    return this.cartService.updateItem(user._id, dto);
  }

  @Delete('remove/:productId')
  @ApiOperation({ summary: 'Remove item from cart' })
  @ApiResponse({ status: 200 })
  async removeItem(@Req() req: Request, @Param('productId') productId: string) {
    const user = req.user as any;
    return this.cartService.removeItem(user._id, productId);
  }

  @Delete('clear')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Clear user cart' })
  async clearCart(@Req() req: Request) {
    const user = req.user as any;
    return this.cartService.clearCart(user._id);
  }
}
