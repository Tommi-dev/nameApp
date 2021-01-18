const mongoose = require('mongoose')

const personShema = mongoose.Schema({
  name: String,
  amount: Number,
})

personShema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Person = mongoose.model('Person', personShema)

module.exports = Person