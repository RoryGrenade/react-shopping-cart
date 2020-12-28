import React from 'react'

function Greeter({name, age = 1, excitementLevel = 1}) {
    const greet = () => {
        alert(`Hello ${name}!`)
    }
    return (
        <>
            <h1>Hi there, {name}{'!'.repeat(excitementLevel)}</h1>
            <p>You are {age}{'!'.repeat(excitementLevel)}</p>
            <button onClick={greet}>Click me</button>
        </>
    )
}

export default Greeter