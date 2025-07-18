import React from 'react'

export const Weather = ({tempreature}) => {
    if(tempreature < 15){
        return <h1>Its cold outside</h1>
    } else if (tempreature >15 && tempreature < 25){
        return <h1>It's nice outisde</h1>
    } else {
        return <h1>It's hot outside</h1>
    }

    
 
  
}
