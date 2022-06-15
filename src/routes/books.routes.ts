/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import BooksController from '../controllers/book.controller';
import validationBook from '../middlewares/book.middleware';

const routerBook = Router();

const booksController = new BooksController();

routerBook.get('/books', booksController.getAll);
routerBook.get('/books/:id', booksController.getById);
routerBook.post('/books/', validationBook, booksController.create);

export default routerBook;
