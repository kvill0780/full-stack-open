const Country = ({country, onClick}) => {
    return (
        <div>
            {country.names.common}
            <button onClick={() => onClick(country.names.common)}>
                Show
            </button>
        </div>
    )
}

export default Country;