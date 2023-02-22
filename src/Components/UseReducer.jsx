import React, { useState, useReducer } from "react";

const ACTION_TYPES = {
  deposit: "deposit",
  withdraw: "withdraw",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
};

export default function UseReducer() {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <h1>useReducer Bank</h1>
      <p>Balance: {money}</p>
      <input
        type="number"
        value={number}
        step="1000"
        onChange={(e) => setNumber(parseInt(e.target.value))}
      ></input>
      <button onClick={() => dispatch({ type: "deposit", payload: number })}>
        Deposit
      </button>
      <button onClick={() => dispatch({ type: "withdraw", payload: number })}>
        Withdraw
      </button>
    </div>
  );
}
