import React from 'react'

const Header = (props) => {
  return(
    <div className='header-container' >

      <div className='header-wrap-container' >
        <div className='header-wrap-item' >
          <h2>Total amount of all the names</h2>
          <h3> {props.persons.reduce((sum, person) => sum + person.amount, 0)} </h3>
        </div>
        <div className='header-wrap-item' >
          <h2>Amount of the name </h2>
          <h3> { props.showPersons.length === 1 ? props.showPersons[0].amount : 0 } </h3>
        </div>
      </div>


      <input 
        placeholder='Search name'
        onChange={props.handleFilter}
      />



      <button onClick={() => props.setSortBtnValue(!props.sortBtnValue)} > 
        {props.sortBtnValue ? 'Sort by amount' : 'Sort by name'} 
      </button>

    </div>
  )
}

export default Header