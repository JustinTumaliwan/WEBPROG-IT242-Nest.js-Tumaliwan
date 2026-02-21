import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // This opens the gates completely
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // CRITICAL FIX: This allows Vercel to assign its own port
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();