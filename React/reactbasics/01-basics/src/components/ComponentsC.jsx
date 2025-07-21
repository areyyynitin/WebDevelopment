import React from 'react'
import { Data ,DataAge} from './CreateContent'
import { useContext } from 'react'

export const ComponentsC = () => {
    const userName = useContext(Data)
    const age = useContext(DataAge)
  return (
 <>
 <h1>My name is {userName} and my age is {age}</h1>
 </>
  )
}
