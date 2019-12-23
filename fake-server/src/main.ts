import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const PORT = process.env.PORT || 3000;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: [
        'Accept',
        'Origin',
        'Accept-Encoding',
        'Access-Control-Allow-Origin',
        'Content-Type',
      ],
      credentials: true,
    },
  });
  await app.listen(PORT);
}
bootstrap();
