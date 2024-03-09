import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import User from './User';
import Friends from './Friends';

function App() {

  function handleClick(){
    alert('button clicked');
  }

  return (
    <>
      
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      
      
    </>
  )
}

export default App
