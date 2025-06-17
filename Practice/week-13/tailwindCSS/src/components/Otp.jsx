import Button from './Button'
import React, { useRef, useState } from 'react'
// import Button from './components/Button'

export const Otp = ({number}) => {
    
    const [disabled, setDisabled] = useState(true)

    return (
        <div className='flex justify-center items-center'>
        
           {Array(number).fill(1).map( (x,index) => { <SubOtpBox key={index}  onDone={() => {
                ref2.current.focus()
            }} goBack={() => {

             }} />} )}

           

          
            <br /><br />

            <Button disabled={disabled}>Sign Up</Button>
        </div>
    )
}

function SubOtpBox({ reference, onDone, goBack }) {
const [inputBoxVal,setInputBoxVal] = useState("")
    return <div>
        <input value={inputBoxVal} ref={reference} onKeyUp={(e) => {
            if (e.key == "Backspace") {
                // go back logic
                goBack();
            }
        }} onChange={(e) => {
            const val = e.target.value
            if (val == "1" || val == "2" || val == "3" || val == "4" || val == "5" || val == "6" || val == "7" || val == "8" || val == "9" || val == "0") {
                setInputBoxVal(val)
                onDone()
            }

        }} type="text" className='outline-none w-[40px] h-[50px] rounded-2xl bg-[#193f6a] m-1 px-4 text-white' />
    </div>
}