import React, { useEffect, useState } from 'react'

export const Increment = ({count,onClickHandler}) => {
    const handleClick = () => onClickHandler()
  return (
    <div>
        <p>{count} </p>
        <button onClick={handleClick} >Increment</button>
    </div>
  )
}


export const Decrement = ({count,onClickHandler}) => {
    const handleClick = () => onClickHandler()
    return <>
    <p>{count} </p>
    <button onClick={handleClick} >Decrement</button>
    </>
}


export const FunctionUseState1 = () => {
    const [count,setCount] = useState( () => {
        const initialValue = 10;
        return initialValue
    } )

    const addCount = () => {
        setCount((prevCount) => prevCount+1)
    }

    return <>
    <p> {count} </p>
    <button onClick={addCount}  >Add count</button>
    </>
}

export const FunctionUseState2 = () => {
    const [generateNumber , setGenerateNumber] = useState( () => Math.floor(Math.random() * 100) )
    function generator() {
        const num =  Math.floor(Math.random() * 100)
        setGenerateNumber(num)
    }

    return <>
    <div>
        <p>Generate Number = {generateNumber}</p>
        <button onClick={generator}>Generate Random Number</button>
         </div>
    </>
}


export const FunctionUseState3 = () => { 
    const [name,setName] = useState(() => {
        const savedName = localStorage.getItem("name")
        return savedName ? JSON.parse(savedName) : "";
    })

    useEffect(() => {
        localStorage.setItem("name" , JSON.stringify(name))
    },[name])

    function handleChange (event){
        setName(event.target.value)
      
    }

    function handleClear(){
        setName("")
    }

    return (
        <>
        <h1>Your name : {name} </h1>
        <input type="text" value={name} placeholder='Enter your name' onChange={handleChange} />
        <button onClick={handleChange}>Clear name</button>
        </>
    )
}