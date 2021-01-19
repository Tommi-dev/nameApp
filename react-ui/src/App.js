import React, { useEffect, useState } from 'react'
import './App.css'
import personService from './services/persons'
import Topbar from './components/Topbar'
import Header from './components/Header'
import Persons from './components/Persons'
import Footer from './components/Footer'

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
      <Topbar />
      <Header 
        persons={persons} 
        showPersons={showPersons} 
        handleFilter={handleFilter} 
        sortBtnValue={sortBtnValue}
        setSortBtnValue={setSortBtnValue}
      />
      <Persons 
        persons={ sortBtnValue ? 
          persons.sort(function(a, b){return a.name.localeCompare(b.name)}) :
          persons.sort(function(a, b){return b.amount - a.amount})
        } 
      />
      <Footer />
    </div>
  )
}

export default App