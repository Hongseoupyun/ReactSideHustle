import React from "react";
import { useState, useReducer } from "react";

const initialState = {
  count: 0,
  students: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        count: state.count + 1,
        students: [
          ...state.students,
          { id: Date.now(), name: action.payload, isPresent: true },
        ],
      };

    case "delete":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };

    case "markPresent":
      return {
        ...state,
        students: state.students.map((student) => {
          if (student.id === action.payload) {
            return { ...student, isPresent: !student.isPresent };
          }
          return student;
        }),
      };
    default:
      return state;
  }
};

function UseReducer2() {
  const [name, setName] = useState("");
  const [studentInfos, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div
      style={{
        margin: "50px",
      }}
    >
      <h1>UseReducer 2: Student Attendance </h1>
      <p>Total Student:</p>
      <input
        type="text"
        placeholder="Please Type name"
        value={name}
        onChange={(e) => handleChange(e)}
      ></input>
      <button
        onClick={() => {
          dispatch({ type: "add", payload: name });
          setName("");
        }}
      >
        Add
      </button>
      {studentInfos.students.map((student) => {
        return (
          <div
            id={student.id}
            style={{
              color: student.isPresent ? "red" : "green",
            }}
            onClick={() =>
              dispatch({ type: "markPresent", payload: student.id })
            }
          >
            {student.name}
            <button
              onClick={() => dispatch({ type: "delete", payload: student.id })}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default UseReducer2;
