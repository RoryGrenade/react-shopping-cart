import React from 'react'
import Navbar from './Navbar'
import Greeter from './Greeter'
import Counter from './Counter'
import MoodToggler from './MoodToggler'
import './App.css';

function App() {
  return (
      <>
          <Counter step={5} />
          <Counter/>
          <MoodToggler />
          <Navbar/>
          <Greeter name="Kai" age="1" excitementLevel={10} />
          <Greeter name="Liah" age="6" excitementLevel={20} />
      </>
  )
}

export default App;
