const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    year: { type: Number, required: true },
    sales: { type: Number, required: true }
  },
  {
    timestamps: true,
    collection: 'books'
  }
)

const Book = mongoose.model('books', bookSchema, 'books')
module.exports = Book
