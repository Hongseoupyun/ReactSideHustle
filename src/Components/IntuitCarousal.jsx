//Withoust animation
//intuit phone screening

import React from "react";
import { useEffect, useState } from "react";

export default function IntuitCarousal() {
  // const [item, setItem] = React.useState('thing');
  const [currentPage, setCurrentPage] = useState(0);
  const imgs = [
    "https://i.pinimg.com/564x/99/0a/ef/990aef3250364aaf474ca69ba50a4f70.jpg",
    "https://i.pinimg.com/564x/bf/5a/10/bf5a10df958a84db998acc9fea1b99d7.jpg",
    "https://i.pinimg.com/564x/76/5a/23/765a23c192aa807842710bd257e262c5.jpg",
    "https://i.pinimg.com/564x/03/34/69/03346934eeebaa9fd89cde1e2c1727f2.jpg",
    "https://i.pinimg.com/564x/2b/a1/51/2ba151aea2cfbd8b330de687ec9185a0.jpg",
  ];

  const handleClick = function (direction) {
    if (direction === "previous") {
      setCurrentPage(currentPage === 0 ? imgs.length - 1 : currentPage - 1);
    } else {
      setCurrentPage(currentPage === imgs.length - 1 ? 0 : currentPage + 1);
    }
  };
  useEffect(() => {
    console.log("re render");
  }, []);

  return (
    <div>
      <img src={imgs[currentPage]} alt="img" />
      <button
        onClick={() => {
          handleClick("previous");
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          handleClick("next");
        }}
      >
        Next
      </button>
    </div>
  );
}
