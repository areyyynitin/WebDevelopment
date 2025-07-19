import React, { useState } from "react";
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
