import express from 'express';

// eslint-disable-next-line import/no-unresolved
import error from './src/middlewares/error.middleware';

const app = express();

app.use(express.json());

app.use(error);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
