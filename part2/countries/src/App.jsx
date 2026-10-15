import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search.jsx";
import Country from "./components/Country.jsx";
import CountryData from "./components/CountryData.jsx";
import countryService from "./services/country.js";

const App = () => {
    const [countries, setCountries] = useState([]);
    const [value, setValue] = useState('');

    useEffect(() => {
        countryService
            .getAll()
            .then(response => {
                setCountries(response)
            })
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        axios
            .get()
    })

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleClick = (countryName) => {
        setValue(countryName);
    }

    const filteredCountries = countries.filter(country => {
        return country.names.common.toLowerCase().includes(value.toLowerCase());
    })

    if (filteredCountries.length > 10) {
        return (
            <div>
                <Search
                    value={value}
                    handleChange={handleChange}
                />
                Too many matches, specify another filter
            </div>
        )
    }
    if (filteredCountries.length === 1) {
        return (
            <div>
                <Search
                    value={value}
                    handleChange={handleChange}
                />
                <CountryData
                    country={filteredCountries[0]}
                />
            </div>
        )
    }

    return (
        <div>
            <Search
                value={value}
                handleChange={handleChange}
            />
            <div>
                {
                    filteredCountries.map(country => {
                        return (
                            <Country
                                key={country.uuid}
                                country={country}
                                onClick={handleClick}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default App;