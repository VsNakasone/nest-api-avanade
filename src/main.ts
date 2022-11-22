import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module';

async function bootstrap() {
  //A função bootstrap é o start da aplicação, ela sempre fica no main
  //NestFactory é um design pattern
  const app = await NestFactory.create(AppModule);

  app.use(json());
  app.use(urlencoded({ extended: true}));
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
