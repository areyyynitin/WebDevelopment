import React, { useRef, useState } from "react";

function App(){
    const [count,setCount] = useState(0)
    const timer = useRef()

    function startClock(){
      let value =  setInterval(() => {
            setCount( (count) => count = count+1)
        },1000)
        timer.current.value
    }

    function stopclock(){
        clearInterval(timer.current)
    }

    return (<>
    <div>
        {count}
        <br />
        <button onClick={startClock}>Start</button>
        <button onClick={stopclock}>End</button>

    </div>
    </>) 
}  


// function AUserRefpp(){

//     const inputRef = useRef()
//     function focusOnInput(){
//         inputRef.current.focus()
//     }

//     return ( 
//     <>
//         <div>

//         SignUp
//             <input ref={inputRef}  type="text" />
//             <input  type="text"  />
//             <button onClick={focusOnInput} >Submit</button>
//             </div>
//     </>
//     )
// }
export default App
// export default AUserRefpp 