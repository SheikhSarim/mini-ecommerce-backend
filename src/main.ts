import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Mini eCommerce Backend')
    .setDescription(
      `
Project Overview
This NestJS project demonstrates three critical dependency injection patterns:

<br />• Intramodular Dependency: Services within the same module
<br />• Intermodular Dependency: Services across different modules
<br />• Circular Dependency: Services that depend on each other

Module Architecture
The project consists of four modules:

<br />• UserModule: User management (CREATE, READ, UPDATE)
<br />• ProductModule: Product catalog (READ operations)
<br />• OrderModule: Order processing (depends on ProductService)
<br />• NotificationModule: Notification system (circular with OrderService)
`,
    )
    .setTermsOfService('http://localhost:8080/terms')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
  // Swagger will be available at http://localhost:8080/api

  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
