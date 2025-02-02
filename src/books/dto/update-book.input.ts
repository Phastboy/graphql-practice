import { CreateBookInput } from './create-book.input';
import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateBookInput extends PartialType(CreateBookInput) {
    @Type(() => Number)
    id: number;

    @IsString()
    title: string;

    @IsString()
    author: string;
}
