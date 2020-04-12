import React from 'react'
import Button from './Button'

const Persons = props => {
    return (
        <div>
            {props.persons.map((person) => {
            return(
                person.name.toLowerCase().includes(props.searchName.toLowerCase()) ?
                <p key={person.name}>{person.name} {person.number} <Button id={person.id} name={person.name} onClick={props.deletePerson} text='delete' /></p> : null)}
            )}
        </div>
    )
  }

export default Persons;