import React from 'react'

export const ProductInfo = () => {
    const product = {
        name:"Laptop",
        price:60000,
        availablity:"In stock"
    }
  return (
    <div className=' '>
        <h1 className='text-2xl '>Product :</h1>
        <p>  name :{product.name} </p>
        <p> price : {product.price} </p>
        <p> available : {product.availablity} </p>
    </div>
  )
}
