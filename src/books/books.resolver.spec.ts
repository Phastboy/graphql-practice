import { Test, TestingModule } from '@nestjs/testing';
import { BooksResolver } from './books.resolver';
import { BooksService } from './books.service';
import { PrismaService } from '../prisma.service';

describe('BooksResolver', () => {
    let resolver: BooksResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [BooksResolver, BooksService, PrismaService],
        }).compile();

        resolver = module.get<BooksResolver>(BooksResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
