import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
    imports: [BooksModule, GraphqlModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
