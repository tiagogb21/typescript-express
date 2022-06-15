/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import BookService from '../services/book.service';

class BooksController {
  constructor(private bookService = new BookService()) {
    this.bookService = bookService;
  }

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.bookService.getAll();
    res.status(StatusCodes.OK).json(books);
  };
}

export default BooksController;
