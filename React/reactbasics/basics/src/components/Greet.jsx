import React from 'react'

export const Greet = () => {
  const name = "Nitin"
  const din = new Date()
  return (
    <div>
      <h1 className='text-4xl'>{name}</h1>
      <p> Aaj ka din: {din.toString()}</p>
    </div>
  )
}
