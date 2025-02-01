import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from './graphql/graphql.module';
import { PrismaService } from './prisma.service';

@Module({
    imports: [GraphQLModule],
    controllers: [AppController],
    providers: [AppService, PrismaService],
})
export class AppModule {}
