import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const port = process.env.PORT ?? 3000 // se debe usar el valor real del puerto. 
  await app.listen(port);
  Logger.log(`Conection in port ${port}`)
}
bootstrap();
