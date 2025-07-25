import React from "react";
import { FaBeer } from "react-icons/fa";

export const IconComponent = () => {
  const moveHandler = () => {
    let n = 0;
    console.log("touch  mat", n + 1);
    alert("touch  mat", n + 1)
  };

  const copyHandler = () => {
    let n = 0;
    console.log("Chap mat" , n+1)
     alert("chap mat", n + 1)
  };

   const animationEnd = () => {
    let n = 0;
    console.log("animation end", n+1)
     alert("aniimation end mat", n + 1)
  };

  const click = () => {
    let n = 0;
    console.log("onclicked", n+1)
     alert("onclicked", n + 1)
  };


  return (
    <div>
      <p style={{height:100, width:100 ,backgroundColor:"olivedrab"}} onMouseMove={moveHandler}>On Mouse move.</p>
      <p style={{height:100, width:100 ,backgroundColor:"orange"}} onMouseMove={copyHandler}>On copy move.</p>
      <p style={{height:100, width:100 ,backgroundColor:"purple"}} onAnimationEnd={animationEnd} >On animationend move.</p>
      <p style={{height:100, width:100 ,backgroundColor:"lightblue"}} onClick={click} >On click move.</p>

      <FaBeer size={30} style={{ fontSize: 30, color: "gold" }} />
    </div>
  );
};
