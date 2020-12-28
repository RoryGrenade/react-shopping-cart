import React, { useState } from "react"

function Counter({step = 1}) {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + step )}>+{step}</button>
        </>
    )
}

export default Counter

