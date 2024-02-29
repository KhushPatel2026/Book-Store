import express from 'express';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const PORT = 5555;
const DB_URL = process.env.MONGODB_URL;
const app = express();
app.use(express.json());
app.use(cors());


app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/books', booksRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect()
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));