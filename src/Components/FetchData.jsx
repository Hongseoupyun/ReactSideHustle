import React, { useState } from "react";
import axios from "axios";

import "./styles.css";

export default function App() {
  const [books, setBooks] = useState(null);
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

  //using fetch
  const fetchData = async function () {
    const data = await (await fetch(apiURL)).json();
    console.log(data);
    setBooks(data);
  };
  //using axios
  const fetchData2 = async () => {
    try {
      const data1 = await axios.get(apiURL);
      setBooks(data1);
    } catch (err) {
      console.log(err);
    }
  };
  //using axios/promise
  const fetchData3 = function () {
    return axios
      .get(apiURL)
      .then((res) => {
        setBooks(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <br />
      </div>

      {/* display datas */}

      <div className="books">
        {books &&
          books.map((book, index) => {
            const authors = book.authors.join(", ");
            const releasedDate = new Date(book.released).toDateString();
            return (
              <div className="book" key={book.name}>
                <h3>Book {index + 1}</h3>
                <h2>{book.name}</h2>

                <div className="details">
                  <p>👨: {authors}</p>
                  <p>📖: {book.numberOfPages}</p>
                  <p>🏘️: {book.country}</p>
                  <p>⏰: {releasedDate}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
