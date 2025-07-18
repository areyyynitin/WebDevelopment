import React from 'react'

export const Product = ({name,price}) => {
  return (
    <div>
        <h1>Products</h1>
        <p>Name = {name} </p>
        <p>Price = {price} </p>
    </div>
  )
}
