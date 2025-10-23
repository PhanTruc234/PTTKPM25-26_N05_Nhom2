// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model, Types } from 'mongoose';
// import { Order, OrderDocument, OrderStatus } from 'src/order/schema/order.schema';
// import { VNPay, ignoreLogger, ProductCode, VnpLocale, dateFormat } from 'vnpay';
// @Injectable()
// export class PaymentService {
//   private vnPay: VNPay;
//   constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {
//     this.vnPay = new VNPay({
//       tmnCode: "NPBLG5M3",
//       secureSecret: "L9FNNT7FA3PGSRB63YFWPVE6B0BLAU7T",
//       vnpayHost: "https://sandbox.vnpayment.vn",
//       testMode: true,
//       //   hashAlgorithm : 'SHA512' as HashAlgorithm,
//       loggerFn: ignoreLogger,
//     });
//   }

//   async createPaymentUrl(orderId: string, ipAddr: string) {
//     const order: any = await this.orderModel.findById(orderId);
//     if (!order) throw new NotFoundException(`Order ${orderId} not found`);
//     if (order.paymentMethod !== 'online') throw new Error('Order không dùng thanh toán online');
//     const txnRef = order._id.toString();
//     const vnpayResponse = await this.vnPay.buildPaymentUrl({
//       vnp_Amount: order.totalPrice,
//       vnp_IpAddr: ipAddr,
//       vnp_TxnRef: txnRef,
//       vnp_OrderInfo: `Thanh toán đơn hàng ${txnRef}`,
//       vnp_OrderType: ProductCode.Other,
//       vnp_ReturnUrl: "http://localhost:5173/payment/return",
//       vnp_Locale: VnpLocale.VN,
//       vnp_CreateDate: dateFormat(new Date()),
//       vnp_ExpireDate: dateFormat(new Date(Date.now() + 15 * 60 * 1000)),
//     });

//     return vnpayResponse;
//   }

//   async checkPayment(query: any) {
//     // query từ VNPay callback
//     const txnRef = query.vnp_TxnRef;
//     const vnp_ResponseCode = query.vnp_ResponseCode;
//     const order = await this.orderModel.findById(txnRef); // để tìm trong db
//     if (!order) throw new NotFoundException(`Order ${txnRef} not found`);
//     if (vnp_ResponseCode === '00') {
//       order.paymentStatus = 'paid';
//       order.status = OrderStatus.PROCESSING;
//       await order.save();
//       return { success: true, message: 'Thanh toán thành công', order };
//     } else {
//       order.paymentStatus = 'unpaid';
//       await order.save();
//       return { success: false, message: 'Thanh toán thất bại', order };
//     }
//   }
// }
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument, OrderStatus } from 'src/order/schema/order.schema';
const PayOS = require('@payos/node');
import { payosConfig } from 'src/config/payos.config';

@Injectable()
export class PaymentService {
  private payos: any;

  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {
    this.payos = new PayOS(
      payosConfig.clientId,
      payosConfig.apiKey,
      payosConfig.checksumKey
    );
  }

  async createPaymentUrl(orderId: string) {
    const order = await this.orderModel.findById(orderId);
    if (!order) throw new NotFoundException(`Order ${orderId} not found`);
    if (order.paymentMethod !== 'online') throw new Error('Order không dùng thanh toán online');
    const orderCode = Math.floor(Date.now() / 1000);
    order.orderCode = orderCode;
    await order.save();
    const body = {
      orderCode,
      amount: order.totalPrice,
      description: `Order ${orderCode}`,
      returnUrl: 'http://localhost:5173/payment/success',
      cancelUrl: 'http://localhost:3100/payment/cancel',
    };

    console.log('Sending to PayOS:', body);

    const paymentLink = await this.payos.createPaymentLink(body);

    console.log('PayOS response:', paymentLink);
    return paymentLink;
  }

  async handleWebhook(data: any) {
    const isValid = this.payos.verifyPaymentWebhookData(data);
    if (!isValid) return { success: false, message: 'Dữ liệu webhook không hợp lệ' };

    const order = await this.orderModel.findOne({ orderCode: data.orderCode });
    if (!order) throw new NotFoundException(`Order ${data.orderCode} not found`);

    if (data.status === 'PAID') {
      order.paymentStatus = 'paid';
      order.status = OrderStatus.PROCESSING;
    } else {
      order.paymentStatus = 'unpaid';
    }

    await order.save();
    return { success: true, message: 'Webhook xử lý thành công', data };
  }
  async handleReturn(query: any) {
    const { code, orderCode, status } = query;
    console.log('Xử lý return:', query);

    // Kiểm tra đơn hàng
    const order = await this.orderModel.findOne({ orderCode });
    if (!order) throw new NotFoundException(`Order ${orderCode} not found`);

    // Nếu code = "00" thì thanh toán thành công
    if (code === '00' && status === 'PAID') {
      order.paymentStatus = 'paid';
      order.status = OrderStatus.PROCESSING;
      await order.save();
      return { success: true, paymentStatus: 'paid', message: 'Thanh toán thành công' };
    } else {
      order.paymentStatus = 'unpaid';
      await order.save();
      return { success: false, paymentStatus: 'unpaid', message: 'Thanh toán thất bại' };
    }
  }

}

