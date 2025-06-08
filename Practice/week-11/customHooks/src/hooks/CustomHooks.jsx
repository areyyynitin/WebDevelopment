import React from "react"
import { useState } from "react"

export default function useCounter(){
  const [count,setCount] = useState(0)
  function increaseCount(){
    setCount(count => count+1)
  }
  return{
    count:count,
    increaseCount:increaseCount
  }
}

// if dependecies is empty,whatever login is writtern here..when app component mount
// whenver the component is render the first time is render ... 