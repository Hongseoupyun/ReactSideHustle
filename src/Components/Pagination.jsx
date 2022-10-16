import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

// import jsonData from "../MOCK_DATA.json";

export default function Pagination() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);
  const url = "https://jsonplaceholder.typicode.com/posts";

  //Pagination Logic
  const pageNumbers = [];
  const totalPosts = posts.length;
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = function (pageNumber) {
    setCurrentPage(pageNumber);
  };

  //Get current posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const fetchedPost = async function () {
      setLoading(true);
      const res = await axios.get(url);
      setPosts(res.data);
      setLoading(false);
    };
    fetchedPost();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  console.log(posts);
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">Pagination...!</h1>
      <ul className="list-group mb-4">
        {currentPost.map((post) => {
          return (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          );
        })}
      </ul>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((pageNumber) => {
            return (
              <li key={pageNumber} className="page-item">
                <a
                  onClick={() => {
                    paginate(pageNumber);
                  }}
                  href="#"
                  className="page-link"
                >
                  {pageNumber}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
