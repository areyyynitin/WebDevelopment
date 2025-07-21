import React from "react";
import { initialState, counterReducer } from "./counterReducer.js";
import { useReducer, useState } from "react";

export const Counter = () => {
    const [state,dispatch] = useReducer(counterReducer,initialState)
    const [inputValue,setInputValue] = useState(0)

    const HandleIncrement = () => {
        dispatch({type:"increment"})
    }


    const HandleDecrement = () => {
           dispatch({type:"decrement"})
    }

    const handleIncrementByAmount = () =>{
         dispatch({type:"incrementByAmount" ,payload:Number(inputValue) })
         setInputValue("")
        }
        
        const handleDecrementByAmount = () =>{
            dispatch({type:"decrementByAmount" ,payload:Number(inputValue) })
            setInputValue("")
    }



  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <div>
        <h1>Counter</h1>
        <h2>{state.count}</h2>
        <button onClick={HandleIncrement}>+</button>
        <button onClick={HandleDecrement}>-</button>

        <div>
            <input type="number" placeholder="Write a number"  value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={handleIncrementByAmount}>Add</button>
            <button onClick={handleDecrementByAmount}>Subtract</button>
            
        </div>
        
      </div>
      
    </div>
  );
};
