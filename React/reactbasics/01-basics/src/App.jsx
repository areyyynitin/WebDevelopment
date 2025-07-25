import { useState } from "react";
import { FocusInput } from "./components/FocusInput";
import { Timer } from "./components/Timer";
import { useFetch } from "./components/useFetch";

function App() {
 
  return (
    <>
    <FetchPractice/>
    </>
  );
}

function FetchPractice(){
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")

  return <>
    {data && data.map(item => {
      return <p key={item.id}> {item.id}. {item.title}</p>
    })}
  </>
}

function Cinema() {
  const [frnds, setFrnds] = useState(["Aman", "Himanshu"]);

  function addfriend() {
    setFrnds([...frnds, "Rishi"]);
  }

  function removefriend() {
    setFrnds(frnds.filter((f) => f !== "Rishi"));
  }

  function updatefrnd() {
    setFrnds(frnds.map((f) => (f === "Aman" ? "Aman Nitin Prajapat" : f)));
  }

  return (
    <>
      <div>
        <div>
          {frnds.map((f) => (
            <ul key={Math.random()}>
              <li>{f}</li>
            </ul>
          ))}
          <button onClick={addfriend}>Add friends</button>
          <button onClick={removefriend}>remove friends</button>
          <button onClick={updatefrnd}>update friends</button>
        </div>

        <MovieRating />
      </div>
    </>
  );
}

export default App;
