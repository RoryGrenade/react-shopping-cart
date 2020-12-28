import React, { useState } from "react"

function Counter({step = 1}) {
    const [count, setCount] = useState(0)
    return (
        <div className="counter">
            <h1 className="counter__heading">{count}</h1>
            <button className="counter__button" onClick={() => setCount(count + step )}>+{step}</button>
        </div>
    )
}

export default Counter

