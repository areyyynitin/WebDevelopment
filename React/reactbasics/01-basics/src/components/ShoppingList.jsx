import React, { useState } from "react";

export const ShoppingList = () => {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age) return;

    const newItems = {
      name,
      age: parseInt(age),
    };

    setList((prevList) => [...prevList, newItems]);
    setAge("");
    setName("");
  };

  return (
    <>
      <h1>Shopping list</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="List name"
          type="text"
        />

        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="List age"
          type="text"
        />

        <button type="submit">Add</button>
      </form>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {" "}
            {item.name} Quantity:{item.age}{" "}
          </li>
        ))}
      </ul>
    </>
  );
};
