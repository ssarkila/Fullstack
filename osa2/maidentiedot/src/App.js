import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Filter from './Filter'
import Countries from './Countries'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ searchName, setSearchName ] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
    }, [])

  const handleSearhName = (event) => {
    setSearchName(event.target.value)  
  }

  const handleCountryClick = (event) => {
    setSearchName(event.target.name)  
  }

  return (
    <div>
      <Filter
        searchName = {searchName}
        handleSearhName = {handleSearhName}
      />
      <Countries
        countries = {countries}
        searchName = {searchName}
        handleCountryClick = {handleCountryClick}
      />
    </div>
  )
}

export default App