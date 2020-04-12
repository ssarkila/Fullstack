import React, { useState, useEffect } from 'react'
import personService from './personService'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'
import Notification from './Notification'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ searchName, setSearchName ] = useState('')
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ notificationMessage, setNotificationMessage] = useState(null)
  const [ className, setClassName] = useState(null)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
    }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if(persons.findIndex(p => p.name===newName) !== -1)
    {
      const person = persons.find(p => p.name === newName)
      if (window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`))
      {
        const changedPerson = { ...person, number: newNumber }
        personService
        .update(person.id, changedPerson)
        .then(response => {
          setPersons(persons.map(person => person.name !== newName ? person : response))
          setClassName('notification')
          setNotificationMessage(`Updated ${newName} number to ${newNumber}`)
          setTimeout(() => {
            setNotificationMessage(null)
            setClassName(null)
          }, 5000)
        })
        .catch(error => {
          console.log(`Information of ${person.name} has already been removed from server`, error)
          setClassName('error')
          setNotificationMessage(`Information of ${person.name} has already been removed from server`)
          setTimeout(() => {
            setNotificationMessage(null)
            setClassName(null)
          }, 5000)
        })
      }
    }
    else
    {
      const maxId = Math.max(...persons.map(p => p.id), 0);
      const newPerson = {name: newName, number: newNumber, id: (maxId + 1)}
      personService
        .create(newPerson)
        .then(response => {
          setPersons(persons.concat(response))
          setClassName('notification')
          setNotificationMessage(`Added ${newName}`)
          setTimeout(() => {
            setNotificationMessage(null)
            setClassName(null)
          }, 5000)
        })
        .catch(error => {
          console.log(`$Failed to add ${newName} to phonebook`, error)
          setClassName('error')
          setNotificationMessage(`$Failed to add ${newName} to phonebook`)
          setTimeout(() => {
            setNotificationMessage(null)
            setClassName(null)
          }, 5000)
        })
    }



    setNewName('')
    setNewNumber('')
  }

  const deletePerson = (event) => {
    event.preventDefault()
    const person = event.target
    if (window.confirm(`Delete ${person.name} ?`))
    {
      personService
      .remove(person.id)
      .then(response => {
        setPersons(persons.filter(p => p.name !== person.name))
        setClassName('notification')
        setNotificationMessage(`Deleted ${person.name}`)
        setTimeout(() => {
          setNotificationMessage(null)
          setClassName(null)
        }, 5000)
      })
      .catch(error => {
        console.log(`Information of ${person.name} has already been removed from server`, error)
        setClassName('error')
        setNotificationMessage(`Information of ${person.name} has already been removed from server`)
        setTimeout(() => {
          setNotificationMessage(null)
          setClassName(null)
        }, 5000)
      })
    }
  }

  const handleSearhName = (event) => {
    setSearchName(event.target.value)  
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)  
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)  
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        searchName = {searchName}
        handleSearhName = {handleSearhName}
      />
      <h2>Add a new</h2>
      <Notification message={notificationMessage} className = {className} />
      <PersonForm
        newName = {newName}
        newNumber = {newNumber }
        handleNameChange ={handleNameChange}
        handleNumberChange = {handleNumberChange}
        addPerson = {addPerson}
      />
      <h2>Numbers</h2>
      <Persons
        persons = {persons}
        searchName = {searchName}
        deletePerson = {deletePerson}
      />
    </div>
  )
}

export default App