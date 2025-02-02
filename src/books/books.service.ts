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

    async update(id: number, updateBookInput: UpdateBookInput) {
        const { title, author } = updateBookInput;
        return this.prisma.book.update({
            where: { id },
            data: {
                title,
                author,
            },
        });
    }

    remove(id: number) {
        return `This action removes a #${id} book`;
    }
}
