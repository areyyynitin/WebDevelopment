import React from 'react'
import { useState } from 'react';

export const Todolist = () => {
  const  [inputValue, setinputValue] = useState("");
  const [todos, settodos] = useState([]);

  function handleSubmit(e){
    e.preventDefault()

    if(inputValue.trim()){
      settodos([...todos,inputValue])
      setinputValue("")
    }
  }


  function handleOnchange(e){
    setinputValue(e.target.value)
  }


  return (
    <>
    <form onSubmit={handleSubmit} >
    <input type="text" value={inputValue} onChange={handleOnchange} />
    <button type='submit'>Ad todo</button>
    </form>
    <ul>
    {todos.map((todo,index) => (
      <li key={index}>{todo}</li>
    ) )}
    </ul>
    </>
  )
}
