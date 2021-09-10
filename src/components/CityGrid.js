import React, { useEffect, useState } from 'react'
import { CityGridItem } from './CityGridItem'
// import PropTypes from 'prop-types'

export const CityGrid = ({ ciudades }) => {

    const [info, setInfo] = useState([])

    const fechtWeather = async (ciudades) => {
        const apiKey = 'ee8136a13a40fe437ca0a3c0179a2b4f'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudades}&appid=${apiKey}`

        const { weather, main, name, id, sys, wind } = await (await fetch(url)).json()
        const {country} = sys
        const {speed} = wind
        const { temp, humidity } = main
        const [{ description, main: principal }] = weather

        // const informacion =  { description, principal, temp, humidity, name };
        setInfo([...info, { description, principal, temp, humidity, name, id, speed, country }]);
    }

    useEffect(() => {
        fechtWeather(ciudades)
    }, [ciudades])


    return (
        <>
            {info.map(cosas => {
                return <CityGridItem
                    key={cosas.id}
                    cosas={cosas}
                />
            })}

        </>
    )
}

// CityGrid.propTypes = {
//     ciudades: PropTypes..isRequired
// }
