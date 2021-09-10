import React from 'react'

export const CityGridItem = ({ cosas }) => {
    const { description, principal, temp, humidity, name, speed, country } = cosas

    let celsius = temp - 273.15
    const flag = `https://www.countryflags.io/${country}/flat/48.png`
    return (
        <div className="col-4 my-2">
            <div className="card bg-dark text-white h-100">
                <ol className="card-body text-center">
                    <h2>{name}, {country} <img alt="flag" src={flag}></img> </h2>
                    <br />
                    <p>Weather <i className="bi bi-globe"></i> - <span>{principal} <small>({description})</small></span></p>
                    <br />
                    <p>Wind <i className="bi bi-wind"></i> - <span>{speed} Km/h</span></p>
                    <br />
                    <p>Temp <i className="bi bi-thermometer-half"></i> - <span>{(celsius.toFixed(2))}ºC / {temp}ºF </span></p>
                    <br />
                    <p>Humidity <i className="bi bi-moisture"></i> - <span>{humidity}%</span></p>
                </ol>
            </div>
        </div>
    )
}
