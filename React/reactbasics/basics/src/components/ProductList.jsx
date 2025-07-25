import React from 'react'

export const ProductList = () => {
    const product = [
        {id:1 , name:"Phone" , price:"$699" },
        {id:2 , name:"Laptop" , price:"$1200" },
        {id:3 , name:"Headphones" , price:"$199" },
    ]
  return (
    <div>
        <h1>ProductList</h1>
        <div className=''>
        {product.map( ({id,name,price}) => (
            <ul className='flex w-1/2 ' key={id}>
                <li>ID={id} </li>
                <li>{name}</li>
                <li>{price}</li>
            </ul>
        )  ) }
        </div>
    </div>
  )
}
