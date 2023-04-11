import React from 'react'
import { useState } from 'react'
import Scene from "./components/Scene/Scene"
import Data from "./data"
import { BotonesNav, Botones } from './components/Scene/styled'
import './index.css'

function App() {

  // STATES
  const [count, setCount] = useState(0);
 

  // LOGIC
  const anterior = () => {
    setCount(count === 0 ? Data.length -1 : count - 1 );
  };

  const siguiente = () => {
    setCount(count === Data.length -1 ? 0 : count + 1 );
  };

  return (
  <div>
    
      <BotonesNav>
        <Botones onClick={() => anterior()}>Anterior</Botones>
        <Botones onClick={() => siguiente()}>Siguiente</Botones>
      </BotonesNav>
      <div>
        {Data.map((frases) => (
        <Scene
          key = {frases.id}
          frases = {frases.text}
          active = {count === frases.id}
        />
          ))}
      </div>

  </div>
  )
}

export default App