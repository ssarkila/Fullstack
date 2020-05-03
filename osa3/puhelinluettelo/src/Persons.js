import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Persons = props => {
  return (
    <div>
      {props.persons.map((person) => {
        return(
          person.name.toLowerCase().includes(props.searchName.toLowerCase()) ?
            <p key={person.id}>{person.name} {person.number} <Button id={person.id} name={person.name} onClick={props.deletePerson} text='delete' /></p> : null)}
      )}
    </div>
  )
}

Persons.propTypes = {
  persons: PropTypes.string,
  searchName: PropTypes.string,
  deletePerson: PropTypes.func
}

export default Persons