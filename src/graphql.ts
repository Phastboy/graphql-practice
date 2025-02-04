
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateBookInput {
    title: string;
    author: string;
    rating: number;
}

export interface UpdateBookInput {
    id: string;
}

export interface Book {
    id: string;
    title: string;
    author: string;
    rating: number;
}

export interface IQuery {
    books(): Nullable<Book>[] | Promise<Nullable<Book>[]>;
    book(id: string): Nullable<Book> | Promise<Nullable<Book>>;
}

export interface IMutation {
    createBook(createBookInput: CreateBookInput): Book | Promise<Book>;
    updateBook(updateBookInput: UpdateBookInput): Book | Promise<Book>;
    removeBook(id: string): Nullable<Book> | Promise<Nullable<Book>>;
}

type Nullable<T> = T | null;
