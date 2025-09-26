import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { DatabaseConnection } from './common/database/database-connection';
import { UserSeeder } from './user/user.seed';
import { UserService } from './user/user.service';
import { OrderService } from './order/order.service';
import { OrderSeeder } from './order/order.seed';

dotenv.config();

async function bootstrap() {
  const db = DatabaseConnection.getInstance();
  await db.connect(process.env.MONGO_URI!);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  });

  // Global validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  // Cho phép truy cập folder tĩnh
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/', // Truy cập qua http://localhost:3100/uploads/...
  });
  // Enable Swagger
  setupSwagger(app);
  if (process.env.SEED === 'true') {
    const userService = app.get(UserService);
    const count = await userService['userModel'].countDocuments();
    if (count < 1000) {
      const seeder = app.get(UserSeeder);
      await seeder.seed();
      console.log('Seeded 50 users successfully!');
    } else {
      console.log(`DB đã có ${count} user, không seed.`);
    }
  }
  const orderService = app.get(OrderService);
  const orderCount = await orderService['orderModel'].countDocuments();
  if (orderCount < 10000) {
    const orderSeeder = app.get(OrderSeeder);
    await orderSeeder.seed();
    console.log('✅ Seeded 500 orders successfully!');
  } else {
    console.log(`DB đã có ${orderCount} order, không seed.`);
  }
  await app.listen(3100);
  console.log(`🚀 Server đang chạy tại http://localhost:3100`);
}
bootstrap();
