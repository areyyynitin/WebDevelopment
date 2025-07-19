import React, { useState } from "react";

export const Profile = () => {
  const [userData, setUserData] = useState({ name: "Nitin", age: 20 });
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value)
    console.log(e.target.value)
    console.log(setInputValue(e.target.value))
  }

  function onSubmit( e) {
    e.preventDefault()

    const trimmedValue = inputValue.trim()

    if(!trimmedValue) return

    if(!(isNaN(trimmedValue))){
      setUserData({...userData,age:Number(inputValue)})
    } else {
      setUserData({...userData,name:inputValue})
    }
    setInputValue("")
  }

  

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>{userData.name}</h2>
        <h2>{userData.age}</h2>

        <input type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
