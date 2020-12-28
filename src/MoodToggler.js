import React, { useState } from "react"

function MoodToggler() {
    const [isHappy, setIsHappy] = useState(true)
    const toggleIsHappy = () => setIsHappy(!isHappy)
    const styles = {color: isHappy ? '#1e90a8' : 'red'}
    return <h3 className="moodToggler" style={styles} onClick={toggleIsHappy}>{isHappy ? ";)" : ":("}</h3>
}

export default MoodToggler

