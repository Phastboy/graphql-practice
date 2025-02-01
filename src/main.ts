import { NestFactory } from '@nestjs/core';
import { ConsoleLogger, Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { networkInterfaces } from 'os';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
    const logger = new Logger('Bootstrap');
    const port = process.env.PORT ?? 8080;
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';

    const app = await NestFactory.create(AppModule, {
        logger: new ConsoleLogger({
            json: true,
            colors: true,
        }),
    });

    const networkAddress = (): string | null => {
        return (
            Object.values(networkInterfaces())
                .flat()
                .find((info) => info?.family === 'IPv4' && !info.internal)
                ?.address ?? null
        );
    };

    const config = new DocumentBuilder()
        .setTitle('Book Review')
        .setDescription('Book review api docs')
        .setVersion('1.0.0')
        .addTag('book')
        .build();
    const documentFactory = () => SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, documentFactory);

    await app.listen(port);
    logger.log(`Network -> ${protocol}://${networkAddress()}:${port}`);
}

bootstrap();
