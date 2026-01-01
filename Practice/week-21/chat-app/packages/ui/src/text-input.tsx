import React from 'react'

type PropType = {
    placeholder?:string,
    size? : "big" | "small",
    onChange? : any
}

export  function TextInput({
  placeholder, size , onChange
} : PropType ) {
  return   <input type="text" onChange={onChange} placeholder={placeholder}
        style={{
            padding: size === "small" ? 10 : 20,
            margin: size === 'small' ? 10 : 20 ,
            borderWidth:1,
            borderColor:"black",
          
        }} ></input>
}
