import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { PrismaService } from '../prisma.service';
import { CreateBookInput } from './dto/create-book.input';

describe('BooksService', () => {
    let service: BooksService;
    let prisma: PrismaService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [BooksService, PrismaService],
        }).compile();

        service = module.get<BooksService>(BooksService);
        prisma = module.get<PrismaService>(PrismaService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('create', () => {
        it('should create a new book', async () => {
            const createBookInput: CreateBookInput = {
                title: 'Test Title',
                author: 'Test Author',
            };

            const createdBook = {
                id: 1,
                title: 'Test Title',
                author: 'Test Author',
                reviews: [],
            };

            jest.spyOn(prisma.book, 'create').mockResolvedValue(createdBook);

            expect(await service.create(createBookInput)).toEqual(createdBook);
        });
    });
});
