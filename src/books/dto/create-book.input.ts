import { IsString } from 'class-validator';

export class CreateBookInput {
    @IsString()
    title: string;

    @IsString()
    author: string;
}
