import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as bodyParser from 'body-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
  });
  
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: [
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    ],
    credentials: true,
  });

  app.useStaticAssets(join(__dirname, '..', 'assets'), {
    prefix: '/assets/',
  });

  app.use(bodyParser.json());

  const config = new DocumentBuilder()
  .setVersion(process.env.APP_VERSION)
  .setTitle('La Paire API Documentation')
  .setDescription('La Paire est un site e-commerce de vente de chaussures')
  .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document,{
    jsonDocumentUrl: '/api/docs-json',
  });

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
  }));
  
  await app.listen(process.env.APP_PORT || 3000, '0.0.0.0');

  console.log(`Application LA PAIRE is running on: ${await app.getUrl()}`);
}
bootstrap();
