/*
 * @Date: 2019-10-22 01:00:44
 * @LastEditors: Asen Wang
 * @LastEditTime: 2019-12-13 22:05:52
 * @content: I
 */
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as mongoose from 'mongoose';

async function bootstrap() {
  mongoose.connect('mongodb://eswang:3333@106.15.37.245:27017/myblog', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
    .setTitle('我的博客')
    .setDescription('博客API接口的Swagger文档')
    .setVersion('1.0')
    .addTag('blog')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(4000);
  Logger.log(`App run in http://localhost:4000`);
}
bootstrap();
