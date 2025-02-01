import { NestFactory } from '@nestjs/core';
import { ConsoleLogger, Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { networkInterfaces } from 'os';

async function bootstrap() {
    const logger = new Logger('Bootstrap');
    const port = process.env.PORT ?? 8080;

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

    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';

    await app.listen(port);
    logger.log(`Network -> ${protocol}://${networkAddress()}:${port}`);
}

bootstrap();
