import { GetBooks } from './getBooks.js';
import { AddBooks } from './addBook.js';
import { GetBookById } from './getBookById.js';
import { UpdateBook } from './updateBook.js';
import { DeleteBookById } from './deleteBook.js';

export const path = {
    paths:{
        '/':{
            ...GetBooks
        },
        '/{id}': {
            ...GetBookById
        },
        '/add': {
            ...AddBooks
        },
        '/edit': {
            ...UpdateBook
        },
        '/delete/{id}': {
            ...DeleteBookById
        },
    }
}