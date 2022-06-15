/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { NotFoundError } from 'restify-errors';
import connection from '../models/connection';
import BookModel from '../models/book.model';
import Book from '../interfaces/book.interface';

class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  public async getAll(): Promise<Book[]> {
    const books = await this.model.getAll();
    return books;
  }

  public async getById(id: number): Promise<Book> {
    const book = await this.model.getById(id);
    return book;
  }

  public create(book: Book): Promise<Book> {
    return this.model.create(book);
  }

  public async update(id: number, book: Book): Promise<void> {
    const bookFound = await this.model.getById(id);
    if (!bookFound) {
      throw new NotFoundError('NotFoundError');
    }

    return this.model.update(id, book);
  }
}

export default BookService;
