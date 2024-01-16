const Book = require('../models/Book')

const postBook = async (req, res, next) => {
  try {
    const newBook = new Book(req.body)

    const bookSaved = await newBook.save()

    return res.status(201).json(bookSaved)
  } catch (error) {
    return res.status(400).json('Ha fallado la petición')
  }
}

const getBook = async (req, res, next) => {
  try {
    const allBooks = await Book.find()

    return res.json(allBooks)
  } catch (error) {
    return res.status(400).json('Ha fallado la petición')
  }
}

const getBookById = async (req, res, next) => {
  const id = req.params.id
  try {
    const book = await Book.findById(id)
    if (book) {
      return res.status(200).json(book)
    } else {
      return res.status(404).json('No book found by this id')
    }
  } catch (err) {
    return res.status(500).json(err)
  }
}

const updateBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const newBook = new Book(req.body)
    newBook._id = id
    const up = await Book.findByIdAndUpdate(id, newBook, { new: true })
    return res.status(200).json(up)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params
    const bookDeleted = await Book.findByIdAndDelete(id)
    return res.status(200).json(bookDeleted)
  } catch (error) {
    return res.status(400).json('Error')
  }
}

module.exports = {
  getBook,
  getBookById,
  postBook,
  updateBook,
  deleteBook
}
