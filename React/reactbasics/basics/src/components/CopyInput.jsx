import React, { useEffect, useState } from "react";
import { PopupContent } from "./PopupContent";

export const CopyInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(inputValue).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div>
      <div>CopyInput</div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleCopy}>Copy</button>

      <PopupContent copied={copied} />
    </div>
  );
};


export const Switcher = () => {
const [sw,setSw] = useState(false)

    return (
        <>
        <br /><b>
            <br />
        </b>
        {sw ? <span>Dark</span> : <span>White</span> }
     <br />
        <input type="text" key={sw ? 'dark' : 'white'} placeholder={sw ? 'dark' : 'white'} />
        <button onClick={() => setSw((s) => !s)}>Switch</button>
        </>
    )
}


export const UseEffect = () =>{
  const [data,setData] = useState([])

  useEffect( () => {
    async function getData(){
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const rawData = await response.json();
    
      if(rawData && rawData.length) setData(rawData)
    }
  getData()
  } ,[] )


  return <>
  <div>
   <ul>
    {data.map( (item) => (
      <section  key={item.id}>
        <li>Title : {item.title}</li>
        <li >Body : {item.body}</li>


      </section>
    ) )}
   </ul>
  </div>
  </>
}