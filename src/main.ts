import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AaaFilter } from './aaa.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets('public', { prefix: '/static' });
  app.useGlobalFilters(new AaaFilter());
  await app.listen(3000);
}
bootstrap();
