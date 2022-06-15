/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import connection from '../models/connection';
import BookModel from '../models/book.models';
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
}

export default BookService;
