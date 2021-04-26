const express = require('express')
const data = require('./data/db.json')
const cors = require('cors');
const app = express()

app.use(cors())
const port = 5000

app.get('/data', (req, res) => {
  res.send(data.data)
})
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})