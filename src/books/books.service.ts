import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';

@Injectable()
export class BooksService {
    create(createBookInput: CreateBookInput) {
        return `This action adds a new book ${createBookInput}`;
    }

    findAll() {
        return `This action returns all books`;
    }

    findOne(id: number) {
        return `This action returns a #${id} book`;
    }

    update(id: number, updateBookInput: UpdateBookInput) {
        return `This action updates a #${id} book ${updateBookInput}`;
    }

    remove(id: number) {
        return `This action removes a #${id} book`;
    }
}
