import React, { useState } from "react";
import "../styleSheets/styleTodo.css";

export const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  function createTodo() {
    setTodos((todos) => {
      return todos.concat({
        text: inputValue,
        id: Math.floor(Math.random() * 10),
      });
    });
    setInputValue("");
  }

  function removeTodo(id) {
    setTodos((todos) => {
      return todos.filter((t) => t.id !== id);
    });
  }

  return (
    <div className="container">
      <h1>Todo</h1>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={createTodo}>Add todo</button>

      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button className="close" onClick={() => removeTodo(id)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
