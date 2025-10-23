// import { Controller, Post, Get, Body, Query, Req, NotFoundException, Res } from '@nestjs/common';
// import { PaymentService } from './payment.service';
// import { Response } from 'express';
// @Controller('payment')
// export class PaymentController {
//   constructor(private readonly paymentService: PaymentService) { }

//   @Post('createqr')
//   async createQr(@Body('orderId') orderId: string, @Req() req: any) {
//     if (!orderId) throw new NotFoundException('orderId is required');
//     const ipAddr = req.ip || req.headers['x-forwarded-for'] || '127.0.0.1';
//     const paymentUrl = await this.paymentService.createPaymentUrl(orderId, ipAddr);
//     return { paymentUrl };
//   }
//   @Get('check-payment-vnpay')
//   async checkPayment(@Query() query: any) {
//     // const result = await this.paymentService.checkPayment(query);

//     // if (result.success) {
//     //   // Redirect sang frontend trang thành công
//     //   return res.redirect(`http://localhost:5173/shopping-cart`);
//     // } 
//     return await this.paymentService.checkPayment(query);
//   }
// }
import { Controller, Post, Body, Req, Get, Query } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) { }
  @Post('create')
  async createPayment(@Body('orderId') orderId: string) {
    const paymentLink = await this.paymentService.createPaymentUrl(orderId);
    return { paymentLink };
  }
  @Get('return')
  async paymentReturn(@Query() query: any) {
    console.log('PayOS', query);
    const result = await this.paymentService.handleReturn(query);

    return result;
  }
  @Post('webhook')
  async webhook(@Body() data: any) {
    return await this.paymentService.handleWebhook(data);
  }
}
