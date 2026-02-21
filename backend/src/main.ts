import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // This default setting safely opens the gates to all frontends
  app.enableCors();
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();