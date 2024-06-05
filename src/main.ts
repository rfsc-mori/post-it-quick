import { Logger } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import appConfigInstance from 'config/app.config';

import { AppModule } from './App.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const app_config = app.get<ConfigType<typeof appConfigInstance>>(
    appConfigInstance.KEY,
  );

  app.enableShutdownHooks();

  const logger = new Logger('main');

  SwaggerModule.setup(
    'api',
    app,
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle(app_config.name)
        .setDescription(`${app_config.name} API`)
        .setVersion(app_config.version)
        .build(),
    ),
  );

  useContainer(app.select(AppModule), {
    fallbackOnErrors: true,
  });

  logger.log(
    `${app_config.name} inicado em: ${app_config.server.address}:${app_config.server.port}`,
  );

  await app.listen(3000);
}

void bootstrap();
