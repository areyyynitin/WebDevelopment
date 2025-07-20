import React, { useEffect, useState } from "react";

export const BasicEffect = () => {
  const [n, setn] = useState(0);
  useEffect(() => {
    console.log("Render", n);
  }, []);
  return (
    <div>
      BasicEffect {n}
      <button
        onClick={() => {
          setn(n + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Countereffect render", count);
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>Counter effect with depencies {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Zara zara touch me touch me touch me
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export const FetchDataEffect = () => {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const rawData = await response.json();
    console.log(rawData)

    setData(rawData);
  }

  useEffect(() => {
    getData();
    
  }, []);

  return (
    <>
      <div>
        <h1>FetchDataEffect</h1>
        {/* <ul>
          {data.map((item) => (
            <section key={item.id}>
              <li> id = {item.id} , Name = {item.name} , Email = {item.email}</li>
            </section>
          ))} */}
        {/* </ul> */}   

        {data.length > 0 ? <p> id = {data[69].id} , Name = {data[69].name} , Email = {data[69].email}</p> : <p>Loading...</p> }
      </div>
    </>
  );
};
