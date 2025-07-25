import React, { useEffect, useRef, useState } from "react";

export const Timer = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
        clearInterval(intervalRef.current)
        setIsRunning(false)
    }
  } , [])

  function startTimer() {
    if (!isRunning) {
      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      setIsRunning(true);
    }
  }
  function clearTimer() {
    clearInterval(intervalRef.current);
    setCount(0);
    setIsRunning(false);
  }
  function pauseTimer() {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  }
  return (
    <div>
      Timer
      <h1>{count}'s</h1>
      <button onClick={startTimer}>start</button>
      <button onClick={pauseTimer}>pause</button>
      <button onClick={clearTimer}>clear</button>
    </div>
  );
};
