import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

dotenv.config();

const PORT = 5555;
const DB_URL = process.env.MONGODB_URL;
const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To Book Store API!');
});

app.use('/books', booksRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(DB_URL)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));