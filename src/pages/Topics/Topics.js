import React from "react";
import { Link } from "react-router-dom";
import blogs from "../../content/blogs";
import "./Topics.css";

function Topics() {
  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <Link to={`/Blog/${encodeURIComponent(blog.id)}`}>
              {blog.location}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Topics;
