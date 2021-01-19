import React, { useEffect, useState } from 'react'
import './App.css'
import personService from './services/persons'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [showPersons, setShowPersons] = useState([])
  const [sortBtnValue, setSortBtnValue] = useState(false)

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons =>
        setPersons(initialPersons)  
      )
  }, [])


  const handleFilter = (event) => {
    setShowPersons(persons.filter((person, i) =>
      persons[i].name.includes(event.target.value)
    ))
  }

  return(
    <div>

      <div>
        <div>
          <h2>Total amount of all the names: </h2>
          <h2> {persons.reduce((sum, person) => sum + person.amount, 0)} </h2>
        </div>
        <div>
          <h2>Amount of the name: { showPersons.length === 1 ? showPersons[0].amount : '' } </h2>
          <input 
            onChange={handleFilter}
          />
        </div>
      </div>

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