const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3001

app.use((req, res, next) => {
  const clientIP = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  req.clientIP = clientIP
  next()
})
app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`)
})
