const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded( { extended: true } ))
app.use(routes)

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})

module.exports = app