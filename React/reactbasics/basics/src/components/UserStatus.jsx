import React from 'react'

export const UserStatus = ({isAdmin , loggedIn}) => {
  return loggedIn ? ( isAdmin  ? <h1>Welcome Admin</h1> : <h1>Welcome user</h1> ) : <h1>No one here</h1>
}
