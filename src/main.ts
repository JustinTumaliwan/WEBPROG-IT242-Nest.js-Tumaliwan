import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'https://pitwall-board.vercel.app',
      'https://webprog-it242-nest-js-tumaliwan.vercel.app',
      'http://localhost:5173', // local Vite dev
    ],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  });

  await app.listen(3000);
}
bootstrap();