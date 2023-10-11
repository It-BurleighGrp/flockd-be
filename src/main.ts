import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: false});
  const config = new DocumentBuilder()
        .setTitle('Flockd Backend')
        .setDescription('Flockd APIs for intranet')
        .setVersion('0.1')
        .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document)
  await app.listen(3334);
}
bootstrap();
