import React from 'react'
import Country from './Country'
import Button from './Button'

const Countries = props => {
    if (props.countries !== null && props.countries.length > 0)
    {
        let countries = props.countries.filter((country) => {
            if (country.name.toLowerCase().includes(props.searchName.toLowerCase()))
            {
                return country;
            }
            return null;
        })
    
        if (countries.length >= 10)
        {
            return(<p>Too many matches, specify another filter</p>)
        }
        else if (countries.length == 1)
        {
            return(<Country key = {countries[0].numericCode} country = {countries[0]}/>)
        }
        else
        {
            return(
                <ul>
                    {countries.map((country) => {
                        return(<li key = {country.numericCode}>{country.name} <Button name = {country.name} onClick={props.handleCountryClick} text='show' /></li>)
                    })}
                </ul>)
        }
    }

    return null;
  }

export default Countries