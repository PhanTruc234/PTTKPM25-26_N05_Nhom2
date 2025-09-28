import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Order, OrderDocument, OrderStatus } from 'src/order/schema/order.schema';
import { VNPay, ignoreLogger, ProductCode, VnpLocale, dateFormat } from 'vnpay';
@Injectable()
export class PaymentService {
  private vnPay: VNPay;
  constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {
    this.vnPay = new VNPay({
      tmnCode: "NPBLG5M3",
      secureSecret: "L9FNNT7FA3PGSRB63YFWPVE6B0BLAU7T",
      vnpayHost: "https://sandbox.vnpayment.vn",
      testMode: true,
      //   hashAlgorithm : 'SHA512' as HashAlgorithm,
      loggerFn: ignoreLogger,
    });
  }

  async createPaymentUrl(orderId: string, ipAddr: string) {
    const order: any = await this.orderModel.findById(orderId);
    if (!order) throw new NotFoundException(`Order ${orderId} not found`);
    if (order.paymentMethod !== 'online') throw new Error('Order không dùng thanh toán online');
    const txnRef = order._id.toString();
    const vnpayResponse = await this.vnPay.buildPaymentUrl({
      vnp_Amount: order.totalPrice,
      vnp_IpAddr: ipAddr,
      vnp_TxnRef: txnRef,
      vnp_OrderInfo: `Thanh toán đơn hàng ${txnRef}`,
      vnp_OrderType: ProductCode.Other,
      vnp_ReturnUrl: "http://localhost:5173/payment/return",
      vnp_Locale: VnpLocale.VN,
      vnp_CreateDate: dateFormat(new Date()),
      vnp_ExpireDate: dateFormat(new Date(Date.now() + 15 * 60 * 1000)),
    });

    return vnpayResponse;
  }

  async checkPayment(query: any) {
    // query từ VNPay callback
    const txnRef = query.vnp_TxnRef;
    const vnp_ResponseCode = query.vnp_ResponseCode;
    const order = await this.orderModel.findById(txnRef); // để tìm trong db
    if (!order) throw new NotFoundException(`Order ${txnRef} not found`);
    if (vnp_ResponseCode === '00') {
      order.paymentStatus = 'paid';
      order.status = OrderStatus.PROCESSING;
      await order.save();
      return { success: true, message: 'Thanh toán thành công', order };
    } else {
      order.paymentStatus = 'unpaid';
      await order.save();
      return { success: false, message: 'Thanh toán thất bại', order };
    }
  }
}
