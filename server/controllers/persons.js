const personRouter = require('express').Router()
const Person = require('../models/person')

personRouter.get('/', async (request, response) => {
  const persons = await Person.find({})
  response.json(persons.map(p => p.toJSON()))
})

module.exports = personRouter