import React from "react";

export const UserList = () => {
  const users = [
    {
      id: 1,
      name: "Amar",
      age: 25,
    },
    {
      id: 2,
      name: "Akbar",
      age: 30,
    },
    {
      id: 3,
      name: "Anthony",
      age: 22,
    },
  ];
  return <div>
    <h1>UserList</h1>
    { users.map( ({id,name,age}) => (
        <ul className="flex " key={id}>
            <li>ID={id}</li>
            <li >Name: {name}, </li>
            <li>Age: {age} </li>
        </ul>
    ) ) }
  </div>;
};
