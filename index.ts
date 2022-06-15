import express from 'express';

// eslint-disable-next-line import/no-unresolved
import error from './src/middlewares/error.middleware';

import BooksRoutes from './src/routes/books.routes';

const app = express();

app.use(express.json());

app.use(BooksRoutes);

app.use(error);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
