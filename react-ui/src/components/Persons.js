import React from 'react'
import Person from './Person'

const Persons = ({persons}) => {
  return(
    <table className='persons-container' >
      <tr>
        <th>Name</th>
        <th>Amount</th>
      </tr>
      {persons.map(person =>
        <Person key={person.id} person={person} />  
      )}
    </table>
  )
}

export default Persons