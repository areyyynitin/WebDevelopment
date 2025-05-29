import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // use statee is a part of hooks
  let [counter, setCounter] = useState(0) //setcounter is a method...that control counter
 
  const addValue = () => {
    counter = counter+1
    if(counter > 5){
    alert("You reached maximum limit")
    return
  }

    setCounter(counter)
  
  }

  const removeValue = () => {
    counter = counter - 1;
    if(counter < 0){
      alert("Value cannot be negative")
      return
    }
    setCounter(counter)
  }

  const multiplyValue = () => {
    counter = counter * 2 
    if(counter >100){
    alert("Value overloaded " , {counter})
    return
    }
    setCounter(counter)
  }

  return (
    <>
     <h1>Helloooooooooooo</h1>
     <h2>Counter value:{counter}</h2>
     <button onClick={addValue}>Add value {counter}</button>
     <br /> <br />
     <button onClick={removeValue}>Remove value {counter} </button>
     <br /> <br />
     <button onClick={multiplyValue}>Multiple Value {counter}</button>

     <br /> <br />
    </>
  )
}

export default App
