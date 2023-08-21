import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Topics.css";

function Topics() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/articles")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch blogs.");
        return response.json();
      })
      .then((data) => setBlogs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="blog-list-container">
      <h3>Locations</h3>
      <ul>
        {blogs
          .filter((blog) => blog.type === "location")
          .map((blog, index) => (
            <li key={index}>
              <Link to={`/Blog/${encodeURIComponent(blog.id)}`}>
                {blog.location}
              </Link>
            </li>
          ))}
      </ul>
      <h3>Food</h3>
      <ul>
        {blogs
          .filter((blog) => blog.type === "food")
          .map((blog, index) => (
            <li key={index}>
              <Link to={`/Blog/${encodeURIComponent(blog.id)}`}>
                {blog.title}
              </Link>
            </li>
          ))}
      </ul>
      <h3>Activities</h3>
      <ul>
        {blogs
          .filter((blog) => blog.type === "activities")
          .map((blog, index) => (
            <li key={index}>
              <Link to={`/Blog/${encodeURIComponent(blog.id)}`}>
                {blog.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Topics;
