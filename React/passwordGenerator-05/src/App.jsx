import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
 const [length,setLength] = useState(8)
 const [numAllowed , setnumAllowed] = useState(false)
 const [charAllowed , setcharAllowed] = useState(false)
 const [password,setpassword] = useState("")

//  use ref hook
const passwordRef = useRef(null)

 const passwordGenerator = useCallback( () => {
  let pass = ""
  let str ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

  if(numAllowed) str = str+"1234567890"
  if(charAllowed) str= str+"~ `~!@#$%^&*()_-+={}[]|:;'<>,.?/"

  for(let i=1; i<= length; i++){
    let char =Math.floor(Math.random() * str.length+1)
    pass += str.charAt(char)
  }
    setpassword(pass)

    

 } , [length,numAllowed,charAllowed,setpassword])

 const copyPasswordToClipboard = useCallback( () => {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,102)
    window.navigator.clipboard.writeText(password)
 } , [password])

 useEffect( () => {
      passwordGenerator() 
    } , [length,numAllowed,charAllowed,passwordGenerator] )

  return (
   <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 text-center '>
      <h1 className='text-white text-center my-3' > Password Generator </h1>
      <div className=' flex shadow rounded-lg overflow-hidden mb-4 '>
        <input type="text"
        value={password}
        className='outline-none w-full py-1 px-3 '
        placeholder='password generator'
        readOnly
        ref={passwordRef}
        />
        <button className=' outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 '
        onClick={copyPasswordToClipboard}
        >Copy</button>
      </div>

      <div className=' flex text-sm gap-x-2'>
        <div className='fex items-center gap-x-1'>
          <input type="range" 
          min={8}
          max={30}
          value={length}
          className='cursor-pointer '
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numAllowed}
          id='numberInput'
          onChange={ () => {
            setnumAllowed( (prev) => !prev)
          } }
          />
          <label htmlFor="numberInput"> Numbers</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='charInput'
          onChange={ () => {
            setcharAllowed( (prev) => !prev)
          } }
          />
          <label htmlFor="charInput"> Character</label>
        </div>
      </div>
      </div>
   </>
  )
}

export default App


