import React from 'react'
import useCounter from './CustomHooks';

function Counter() {
  const {count,increaseCount} = useCounter();
  

  return (
    <>
    <div>
       
      <button style={{paddingTop:10}}  onClick={increaseCount}>Counter {count}</button>
    </div>
    </> 
  )
}

export default Counter
