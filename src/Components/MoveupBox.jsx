import React, { useState } from "react";
import "./styles.css";

export default function Moveup() {
  const [offsetTop, setOffsetTop] = useState(300);

  const moveBoxUp = () => {
    setOffsetTop(offsetTop - 5);
  };
  const moveBoxDown = () => {
    setOffsetTop(offsetTop + 5);
  }

  return (
    <div className="App">
      <h1>Move the Box!</h1>
      <button onClick={moveBoxUp}>Move Up</button>
      <button onClick={moveBoxDown}>Move down </button>
      <div
        className="box"
        style={{
          transform: `translateY(${offsetTop}px)`
        }}
      />
    </div>
  );
}
