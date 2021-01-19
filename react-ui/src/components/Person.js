import React from 'react'

const Person = ({person}) => {
  return(
    <tr className='person-container' >
      <td> {person.name} </td>
      <td> {person.amount} </td>
    </tr>
  )
}

export default Person