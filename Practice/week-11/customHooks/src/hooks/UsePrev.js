import React, { useEffect, useRef } from 'react'

function UsePrev(value) {
    const ref = useRef()

    useEffect( ()=> {
        ref.current = value
    },[value])

  return ref.current
}

export default UsePrev


// Useref => when we store useref hooks in a variable...and whenver we update the value of that variable..it will not re-render the component

// UsePrev Hook
// 1st value is undefined..so it will not defined anything
// Then  he get the value the "value from the parameter" and ...variable called ref take the value from the "value parameter"
// then it return the previus value of "value parameter"
// then using useEffect ..we can update the value of that ref variable