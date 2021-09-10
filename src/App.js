import './index.css';
import React, { useState } from 'react'
import { AddCity } from './components/AddCity';
import { CityGrid } from './components/CityGrid';

export const App = () => {
    const [ciudad, setCiudad] = useState([])

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className="mt-2 text-center text-uppercase">Clima actual</h1>
                    <AddCity setCiudad={setCiudad} />
                    <br />
                </div>
                <div className="row">
                    {
                        ciudad.map(ciudades => {
                            return <CityGrid
                                key={ciudades}
                                ciudades={ciudades} />
                        })
                    }
                </div>
            </div>
        </>
    )

}

