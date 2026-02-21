import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // A blank command allows ALL origins, including Preview URLs
  app.enableCors();
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();