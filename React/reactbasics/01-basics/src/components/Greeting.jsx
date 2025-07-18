import React from 'react'

export const Greeting = ({timeOfTheDay}) => {

   return<>
   <h1>1:31 start here</h1>
 {  timeOfTheDay === "morning" ? <h1>Goodmorning</h1> :  <h1>Good evening</h1>}
   
   </> 
  
}
