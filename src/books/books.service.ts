import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { PrismaService } from '../prisma.service';

@Injectable()
export class BooksService {
    constructor(private readonly prisma: PrismaService) {}

    async create(createBookInput: CreateBookInput) {
        const { title, author } = createBookInput;
        return this.prisma.book.create({
            data: {
                title,
                author,
            },
        });
    }

    findAll() {
        return `This action returns all books`;
    }

    findOne(id: number) {
        return `This action returns a #${id} book`;
    }

    update(id: number, updateBookInput: UpdateBookInput) {
        return `This action updates a #${id} book ${JSON.stringify(updateBookInput)}`;
    }

    remove(id: number) {
        return `This action removes a #${id} book`;
    }
}
