import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js'; // Adjust path as necessary
import booksRoute from './routes/booksRoute.js'; // Adjust path as necessary
import cors from 'cors' ;

const app = express();

app.use(express.json());


app.use(cors());

//app.use(
  //cors({
  //  origin:'http://localhost:3000',
   // methods: ['GET', 'POST', 'PUT', 'DELETE'],
   // allowedHeaders: ['Content-Type'],

 // })
//);/

app.use('/books', booksRoute); // Mount booksRoute at /books

mongoose.connect(mongoDBURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publishYear: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});


app.get('/', (request, response) => {
  return response.status(200).send('WELCOME TO MERN STACK TUTORIAL');
});

export default app;
