import { Injectable } from '@nestjs/common';
import { CreateBookInput, UpdateBookInput, Book } from '../graphql/graphql';

@Injectable()
export class BooksService {
    private books: Book[] = [
        { id: '1', title: 'The Great Gatsby', author: 'unknown', rating: 9 },
        { id: '2', title: '1984', author: 'unknown', rating: 8 },
    ];

    create(bookInput: Omit<Book, 'id'>) {
        const newBook = { id: String(this.books.length + 1), ...bookInput };
        this.books.push(newBook);
        return newBook;
    }

    findAll() {
        return this.books;
    }

    findOne(id: string) {
        return this.books.find((book) => book.id === id);
    }
}
