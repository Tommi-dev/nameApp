require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const morgan = require('morgan')


app.use(express.json())
app.use(express.static(path.join(__dirname, '../react-ui', 'dist')))
app.use(morgan('tiny'))

module.exports = app