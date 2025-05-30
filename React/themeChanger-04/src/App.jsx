import { useState } from 'react'


function App() {
  const [colorChanger,SetColorChanger] = useState('green');

  return (
 
   <div className='w-full h-screen duration-200'
   style={{backgroundColor:colorChanger}}
   >
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-md' >
        <button onClick={() => SetColorChanger("red")}  className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
        style={{backgroundColor:"red"}}
        >Red</button>

         <button onClick={() => SetColorChanger("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
        style={{backgroundColor:"green"}}
        >Green</button>

         <button onClick={() => SetColorChanger("yellow")}  className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
        style={{backgroundColor:"yellow"}}
        >Yellow</button>

         <button onClick={() => SetColorChanger("black")}  className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
        style={{backgroundColor:"black"}}
        >black</button>

         <button onClick={() => SetColorChanger("lavender")}  className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
        style={{backgroundColor:"lavender"}}
        >Lavender</button>

         <button onClick={() => SetColorChanger("blue")}  className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
        style={{backgroundColor:"blue"}}
        >blue</button>

         <button onClick={() => SetColorChanger("olive")}  className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
        style={{backgroundColor:"olive"}}
        >olive</button>

         <button onClick={() => SetColorChanger("gray")}  className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
        style={{backgroundColor:"gray"}}
        >gray</button>

         <button onClick={() => SetColorChanger("pink")}  className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
        style={{backgroundColor:"pink"}}
        >pink</button>

         <button onClick={() => SetColorChanger("purple")}  className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
        style={{backgroundColor:"purple"}}
        >purple</button>

         <button onClick={() => SetColorChanger("white")}  className='outline-none px-4 py-1 rounded-full text-white shadow-sm'
        style={{backgroundColor:"black"}}
        >white</button>

         </div>
    </div>
   </div>
  
  )
}

function RedButton(){
  function Red(){

  }
  return <>
   <button className='font-bold' onClick={Red}>Red</button>
  </>
}

export default App
