import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PaymentModule } from './payment/payment.module';
import { UserSeeder } from './user/user.seed';
import { OrderSeeder } from './order/order.seed';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    ProductModule,
    CategoryModule,
    forwardRef(() => CartModule),
    OrderModule,
    AuthModule,
    UserModule,
    PaymentModule,
  ],
  providers: [
    UserSeeder,
    OrderSeeder,
  ],
})
export class AppModule { }
