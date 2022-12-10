import React, { useState } from 'react'

const PersonCard = (props) => {
    const [ items, setItems ] = useState(6);
    return (
        <div>
            <h1>{props.fullName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
            <p>items in stock {items}</p>
            <button onClick={(event) => setItems(items - 1) }>Buy {props.fullName}</button>
        </div>
    )
}
export default PersonCard;