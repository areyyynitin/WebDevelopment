import React from 'react'

export const Person = ({name,age,img}) => {
  return (
    <div>
        <img src={img} alt={name} width={200} />
        <h1>Name = {name} </h1>
        <p>Age = {age} </p>
    </div>
  )
}
