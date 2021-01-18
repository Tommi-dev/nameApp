require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const personRouter = require('./controllers/persons')

// Opening a database connection
console.log('connecting to MongoDB')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB', error.message)
  })

app.use(express.json())
app.use(express.static(path.join(__dirname, '../react-ui', 'dist')))
app.use(morgan('tiny'))
app.use('/api/persons', personRouter)

module.exports = app