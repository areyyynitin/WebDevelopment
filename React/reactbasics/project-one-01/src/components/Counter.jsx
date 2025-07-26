import React, { useState } from 'react'
import '../styleSheets/styleCounter.css'
const Counter = () => {
    const [count,setCount] = useState(0)

    function handlePlus(){
        setCount((c) => c+1)
    }

    function handleMinus(){
        setCount((c) => c-1)
    }

  return (
    <div  className='container'>
      
     <div> <h3 className='number'>{count}</h3></div>

    <div className='btns-container'>
      <button className='increment'  onClick={handlePlus}> +</button>
      <button className='increment' onClick={handleMinus}>-</button>
    </div>
      
    </div>
  )
}

export default Counter
