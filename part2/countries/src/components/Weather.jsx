import { useState, useEffect } from 'react'
import weatherService from '../services/weather.js'

const Weather = ({ capital }) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        if (!capital) {
            return null;
        }
        weatherService
            .getWeather(capital)
            .then(response => {
                console.log(response)
                setWeather(response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [capital])

    if (!weather) {
        return null;
    }

    const iconUrl = `https://openweathermap.org/payload/api/media/file/${weather.weather[0].icon}.png`

    return (
        <div>
            <p>Temperature {weather.main.temp} Celsius </p>
            <img src={iconUrl} />
            <p>Wind {weather.wind.speed} m/s</p>
        </div>
    )
}

export default Weather
