import React from "react";
import imgData from "../imgData.json";
import "./ImageCarousal.css";
import { useState, useEffect } from "react";

//WIth animation
export default function ImageCarousal() {
  const [currentPage, setCurrentPage] = useState(0);
  const length = imgData.length;

  const nextSlide = function () {
    setCurrentPage(currentPage === length - 1 ? 0 : currentPage + 1);
  };

  const prevSlide = function () {
    setCurrentPage(currentPage === 0 ? length - 1 : currentPage - 1);
  };
  useEffect(() => {
    console.log("re-render");
  }, []);

  if (!Array.isArray(imgData) || imgData.length === 0) {
    return null;
  }

  console.log(currentPage);
  return (
    <div>
      <section className="slider">
        {imgData.map((element, index) => {
          return (
            <div
              className={index === currentPage ? "slide active" : "slide"}
              key={element.id}
            >
              {index === currentPage && (
                <img src={element.image} alt="baby image" className="image" />
              )}
            </div>
          );
        })}
        <button className="left" onClick={prevSlide}>
          Previous
        </button>
        <button className="right" onClick={nextSlide}>
          Next
        </button>
      </section>
    </div>
  );
}
