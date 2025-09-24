import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';
import { setupSwagger } from './swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { DatabaseConnection } from './common/database/database-connection';

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
  setupSwagger(app); // Swagger UI tại /api-docs

  await app.listen(3100);
  console.log(`🚀 Server đang chạy tại http://localhost:3100`);
}
bootstrap();
