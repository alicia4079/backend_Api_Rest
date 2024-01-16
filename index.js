require('dotenv').config()
const express = require('express')
const { connectDB } = require('./src/config/db')
const bookRoutes = require('./src/api/routes/book.routes')

connectDB()

const PORT = 3000
const server = express()

server.use(express.json())

server.use('/popularbooks', bookRoutes)

server.use('*', (req, res, next) => {
  const error = new Error('Route not found')
  error.status = 404
  res.status(404).json({ error: 'Ruta no encontrada' })
})

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`)
})
