import React from 'react'
import Navbar from './Navbar'
import Greeter from './Greeter'
import Counter from './Counter'
import MoodToggler from './MoodToggler'
import Cart from './Cart'
import './index.css';

const items = [
    {id: 1, name: 'XBox Series X', price: 449.00, qty: 1},
    {id: 2, name: 'XBox Series S', price: 249.00, qty: 2},
    {id: 3, name: 'Playstation 5', price: 449.00, qty: 1},
    {id: 4, name: 'Playstation 5 Digital Edition', price: 349.00, qty: 1},
]

function App() {
  return (
      <>
          <Cart initialItems={items} />
      </>
  )
}

export default App;
