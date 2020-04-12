import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ country }) => {

const [ weather, setWeather ] = useState({})
const api_key = process.env.REACT_APP_API_KEY

useEffect(() => {
    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.name}&units=m`)
      .then(response => {
        setWeather(response.data)
      })
    }, [])

    console.log('weather', weather)
    if (!weather.hasOwnProperty('location') || weather.location.name.length === 0)
    {
        return null;
    }
    
    return (
        <div>
            <h3>Weather in {weather.location.name}</h3>
            <p>temperature: {weather.current.temperature} Celsius</p>
            <img 
                src={weather.current.weather_icons[0]}
                alt={weather.location.name}
                width="100"
                height="auto"
            />
            <p>wind: {weather.current.wind_speed} m/s direction {weather.current.wind_dir}</p>
        </div>
    )
  }

export default Weather;