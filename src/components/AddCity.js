import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCity = ({setCiudad}) => {

    // const handleAdd = () => {
    //     setCiudad(['Buenos saifers',...ciudad])
    // }
    const [inputValue, setInputValue] = useState('')
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(inputValue.trim().length > 2) {
            setCiudad(city => [inputValue ,...city])
            setInputValue('')
        } else {
            window.alert('Ingrese una ciudad valida')
        }

    }


    return (
        <form className="mb-3" onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-control mb-1"
                autoComplete="off"
                name="ciudad"
                value={inputValue}
                onChange={handleChange}
                placeholder="Ingrese su ciudad">
            </input>

            <button type="submit" className="btn btn-danger mt-2 w-100 text-uppercase">Buscar</button>
        </form>
    )
}
AddCity.propTypes = {
    setCiudad: PropTypes.func.isRequired 
}