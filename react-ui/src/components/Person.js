import React from 'react'

const Person = ({person}) => {
  return(
    <div>
      <h1> {person.name} {person.amount} </h1>
    </div>
  )
}

export default Person