import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { CreateBookInput, UpdateBookInput } from '../graphql/graphql';

@Resolver('Book')
export class BooksResolver {
    constructor(private readonly booksService: BooksService) {}

    @Mutation('createBook')
    create(@Args('createBookInput') createBookInput: CreateBookInput) {
        return this.booksService.create(createBookInput);
    }

    @Query('books')
    findAll() {
        return this.booksService.findAll();
    }

    @Query('book')
    findOne(@Args('id') id: string) {
        return this.booksService.findOne(id);
    }
}
