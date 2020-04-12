import React from 'react'

const Persons = props => {
    return (
        <div>
            {props.persons.map((person) => {
            return(
                person.name.toLowerCase().includes(props.searchName.toLowerCase()) ?
                <p key={person.name}>{person.name} {person.number}</p> : null)}
            )}
        </div>
    )
  }

export default Persons;