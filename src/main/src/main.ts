import { NestFactory } from '@nestjs/core';
import * as cookieParser from "cookie-parser";
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use(cookieParser());
  //app.useLogger(['error', 'warn']);
  app.enableCors(
 /*     {
        origin: 'http://localhost:4200',
        credentials: true,
      }*/
  )
  await app.listen(3002);
}
bootstrap();
