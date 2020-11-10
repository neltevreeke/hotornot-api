const express = require('express')
const requireDir = require('require-dir')
const bodyParser = require('body-parser')
const errorHandler = require('./middleware/errorHandler')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

const routes = requireDir('./routes')

Object
  .values(routes)
  .forEach(route => route(app))

app.use(errorHandler)

module.exports = app
