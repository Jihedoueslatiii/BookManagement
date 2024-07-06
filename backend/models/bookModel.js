import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema(
  { 
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
  },
  {
    timestamps: true // Fixed the typo from "Timestamp" to "timestamps"
  }
);

export const Book = mongoose.model('Book', bookSchema); // Changed 'Cat' to 'Book'
