/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import BooksController from '../controllers/book.controller';
import validationBook from '../middlewares/book.middleware';

const routerBook = Router();

const booksController = new BooksController();

const booksSlashId = '/books/:id';

routerBook.get('/books', booksController.getAll);
routerBook.get(booksSlashId, booksController.getById);
routerBook.post('/books/', validationBook, booksController.create);
routerBook.put(booksSlashId, validationBook, booksController.update);
routerBook.delete(booksSlashId, booksController.remove);

export default routerBook;
