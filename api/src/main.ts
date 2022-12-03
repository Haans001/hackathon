import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { AccessTokenGuard } from './common/guards';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      always: true,
      whitelist: true,
    }),
  );
  const reflector = new Reflector();
  app.useGlobalGuards(new AccessTokenGuard(reflector));
  app.enableCors();
  await app.listen(8000);
}
bootstrap();
