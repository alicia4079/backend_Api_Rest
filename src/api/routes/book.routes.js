const {
  getBook,
  getBookById,
  postBook,
  updateBook,
  deleteBook
} = require('../controllers/book')

const bookRoutes = require('express').Router()

bookRoutes.get('/:id', getBookById),
  bookRoutes.get('/', getBook),
  bookRoutes.post('/', postBook)
bookRoutes.put('/:id', updateBook), bookRoutes.delete('/:id', deleteBook)

module.exports = bookRoutes
