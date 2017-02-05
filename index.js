const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')
const { PORT } = process.env

const app = express()
  .use(bodyParser.json())
  .use('/notes', router)

app.listen(PORT || 3005, () => {
  console.log(`Listening on port ${PORT || 3005}`) // eslint-disable-line
})

module.exports = app
