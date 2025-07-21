import React from 'react'
import { UserContext } from './UserContext'
import { useContext,useState } from 'react'


export const UpdateUser = () => {
  const {updateUser } = useContext(UserContext)
  const [newName,setNewName] = useState('')

  function handleSubmit(e){
    e.preventDefault()

    if(newName.trim()){
      updateUser(newName)
      setNewName("")
    }
  }

  return (
    <div>
      <h1>UpdateUser</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder='Enter new name' />
        <button type='submit'>Add</button>
      </form>
    </div>
  )
}
