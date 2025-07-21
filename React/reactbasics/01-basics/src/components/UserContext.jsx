import React from 'react'
import { createContext,useState } from 'react'

export const UserContext = React.createContext()

export const UserProvider = ({children}) => {
    const [user,setUser] = useState({name:"Raman raghav"})

    const updateUser = (newName) => {
        setUser({ name:newName})
    }
  return (
   <>
   <UserContext.Provider value={{user,updateUser}}>
    {children}
   </UserContext.Provider>
   </>
  )
}
