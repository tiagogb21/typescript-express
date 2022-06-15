/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import BooksController from '../controllers/book.controller';

const routerBook = Router();

const booksController = new BooksController();

routerBook.get('/books', booksController.getAll);
routerBook.get('/books/:id', booksController.getById);

export default routerBook;
