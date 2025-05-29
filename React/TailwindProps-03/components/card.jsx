import React from 'react'

function Card({username , reelId,price="freef" , imgsrc}) {
    console.log("username:" , username)
  return (
    
     <div className="flex flex-col rounded-xl  p-4 mb-4"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src={imgsrc}
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">{username}</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>{reelId}</p>
            <p>{price}</p>
          </div>
        </div>
      </div>
  )
}

export default Card
