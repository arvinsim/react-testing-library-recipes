import React from 'react'
import useGetCars from '../utils/useGetCars'

function HooksInComponents() {
    const [loading, cars] = useGetCars()

    if (loading) {
        return <div>Page is not yet loaded!</div>
    }

    return (<div>
        {cars.map(car => {
            return <div key={car.id}>{car.name}</div>
        })}
    </div>)
}

export default HooksInComponents