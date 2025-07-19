import { useState } from "react";
import { Footer } from "./components/Footer";
import { Greet } from "./components/Greet";
import { Greeting } from "./components/Greeting";
import { Header } from "./components/Header";
import { IconComponent } from "./components/IconComponent";
import { MainContent } from "./components/MainContent";
import { Person } from "./components/Person";
import { Product } from "./components/Product";
import { ProductInfo } from "./components/ProductInfo";
import { ProductList } from "./components/ProductList";
import { ProfileCard } from "./components/ProfileCard";
import { StyleCard } from "./components/StyleCard";
import { UserList } from "./components/UserList";
import { UserStatus } from "./components/UserStatus";
import { Weather } from "./components/Weather";
import { FaCity } from "react-icons/fa6";
import { MovieRating } from "./components/MovieRating";
import {
  Decrement,
  FunctionUseState1,
  FunctionUseState2,
  FunctionUseState3,
  Increment,
} from "./components/Comp1";
import { Todolist } from "./components/Todolist";
import { Profile } from "./components/Profile";
import { ShoppingList } from "./components/ShoppingList";
import { CopyInput, Switcher } from "./components/CopyInput";

function App() {
 
  return (
    <>
      <CopyInput />
      <Switcher/>
    </>
  );
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
