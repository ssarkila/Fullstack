import React from 'react'
import Weather from './Weather'

const Country = ({ country }) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <ul>
                <li>capital {country.capital}</li>
                <li>population {country.population}</li>
            </ul>
            <h3>Spoken languages</h3>
            <ul>
                {country.languages.map((language) => {
                    return (<li key = {language.name}>{language.name}</li>)
                })}
            </ul>
            <img 
                src={country.flag}
                alt={country.name}
                width="200"
                height="auto"
            />
            <Weather country = {country}/>
        </div>
    )
  }

export default Country;