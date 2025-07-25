import React, { useRef } from "react";

export const FocusInput = () => {
  const inputElement = useRef(null);
  console.log(inputElement);

  function focusHandle() {
    if (inputElement.current) {
      inputElement.current.focus();
      inputElement.current.value = "nitin";
    }
  }
  return (
    <div>
      FocusInput
      <div>
        <input
          type="text"
          ref={inputElement}
          onChange={(e) => e.target.value}
        />
        <button onClick={focusHandle}>FOcus</button>
      </div>
    </div>
  );
};
