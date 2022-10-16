import React from "react";
import { useState } from "react";

function IncrementDecrementButton() {
  const [result, setResult] = useState(0);
  const increase = () => {
    setResult(result + 1);
  };
  const decrease = () => {
    setResult(result - 1);
  };
  return (
    <div>
      <h1>Increment/Decrement Buttons!</h1>
      <div>{result}</div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default IncrementDecrementButton;
