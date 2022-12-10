import React, { useState } from 'react'

const PersonCard = (props) => {
    const [ currentAge, setCurrentAge ] = useState(props.age);
    return (
        <div>
            <h1>{props.fullName}</h1>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {props.hairColor}</p>
            
            <button onClick={(event) => setCurrentAge(currentAge + 1 ) }>Birthday for {props.name}</button>
        </div>
    )
}
export default PersonCard;