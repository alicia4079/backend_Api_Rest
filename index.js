const express = require('express')

const PORT = 3000
const server = express()

server.use('*', (req, res, next) => {
  const error = new Error('Route not found')
  error.status = 404
  res.status(404).json({ error: 'Ruta no encontrada' })
})

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`)
})
