import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';

@Injectable()
export class BooksService {
    async create(createBookInput: CreateBookInput) {
        return `This action adds a new book with input: ${JSON.stringify(createBookInput)}`;
    }

    findAll() {
        return `This action returns all books`;
    }

    findOne(id: number) {
        return `This action returns a #${id} book`;
    }

    async update(id: number, updateBookInput: UpdateBookInput) {
        return `This action updates a #${id} book ${JSON.stringify(updateBookInput)}`;
    }

    remove(id: number) {
        return `This action removes a #${id} book`;
    }
}
