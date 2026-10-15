import Weather from "./Weather.jsx";

const CountryData = ({ country }) => {
    return (

        <div>
            <h1>{country.names.common}</h1>

            <p>Capital {country.capitals[0].name}</p>
            <p>Area {country.area.kilometers}</p>

            <h1>Languages</h1>
            <ul>
                {country.languages.map(l => <li key={l.bcp47}>
                    {l.name}
                </li>)}
            </ul>
            <img
                src={country.flag.url_svg}
                width={300}
            />

            <h1>Weather in {country.names.common}</h1>
            <Weather capital={country.capitals[0].name} />
        </div>
    )
}

export default CountryData;