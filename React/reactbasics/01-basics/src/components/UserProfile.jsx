import React from 'react'
import { UserContext } from './UserContext'
import { useContext } from 'react'
export const UserProfile = () => {
    const {user} = useContext(UserContext)
  return (
    <div>
        <h1>UserProfile</h1>
        <p>{user.name}</p>
    </div>
   
  )
}
