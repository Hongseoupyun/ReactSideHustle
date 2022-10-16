import React from "react";
import { useState } from "react";
import JSONDATA from "../MOCK_DATA.json";
import "./DynamicSearchFilter.css";

function DynamicSearchFilter() {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(searchTerm);

  return (
    <div>
      <div className="dynamic">
        <h1>Search Filter</h1>
        <input
          type="text"
          placeholder="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
        {JSONDATA.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (
            val.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return val;
          }
        }).map((data, key) => {
          return <p key={key}>{data.first_name}</p>;
        })}
      </div>
    </div>
  );
}

export default DynamicSearchFilter;
