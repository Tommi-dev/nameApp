import React, { useEffect, useState } from 'react'
import './App.css'
import personService from './services/persons'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [sortBtnValue, setSortBtnValue] = useState(false)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons =>
        setPersons(initialPersons)  
      )
  }, [])

  console.log('persons length:', persons.length)
  console.log(persons)

  console.log('active:', sortBtnValue)

  return(
    <div>
      <button onClick={() => setSortBtnValue(!sortBtnValue)} > 
        {sortBtnValue ? 'Sort by amount' : 'Sort by name'} 
      </button>

      <Persons 
        persons={ sortBtnValue ? 
          persons.sort(function(a, b){return a.name.localeCompare(b.name)}) :
          persons.sort(function(a, b){return b.amount - a.amount})
        } 
      />
    </div>
  )
}

export default App