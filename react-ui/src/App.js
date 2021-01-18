import React, { useEffect, useState } from 'react'
import './App.css'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons =>
        setPersons(initialPersons)  
      )
  }, [])

  console.log('persons length:', persons.length)
  console.log(persons)

  return(
    <div>
      Hello world
    </div>
  )
}

export default App