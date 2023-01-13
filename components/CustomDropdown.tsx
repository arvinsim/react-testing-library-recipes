import React, {useState} from 'react';
import styled from "styled-components";

function CustomDropdown() {
    const [isVisible, setVisible] = useState(false)
    const [cars, setCars] = useState([{name: 'BMW', selected: true}, {name: 'Ferrari', selected: false}, {name: 'Lambo'}])

    return (
        <div>
            <DropdownButton onClick={() => setVisible(!isVisible)}>Choose a car</DropdownButton>
            <Dropdown role="listbox" isVisible={isVisible}>
                {cars.map(car => {
                    return <div role="option" key={car.name} aria-selected={car.selected} onClick={() => {
                        setCars(cars.map(c => {
                            if (c.name === car.name) {
                                return {...c, selected: true}
                            } else {
                                return {...c, selected: false}
                            }
                        }))
                    }}>{car.name}</div>
                })}
            </Dropdown>
        </div>
    );
}

const DropdownButton = styled.div``
const Dropdown = styled.div<{ isVisible: boolean}>``

export default CustomDropdown;