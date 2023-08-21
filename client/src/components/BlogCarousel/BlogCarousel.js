import React, { useState, useEffect } from "react";
import BlogCard from "../BlogCard/BlogCard";
import "./BlogCarousel.css";
import { Link } from "react-router-dom";

function BlogCarousel() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://michael-tblog-826d014d0fcf.herokuapp.com/articles")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch blogs.");
        return response.json();
      })
      .then((data) => setBlogs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h1>Recent Blogs</h1>
      <div className="blog-grid">
        {blogs
          .sort(() => Math.random() - 0.5)
          .slice(0, 4)
          .map((blog) => (
            <Link to={`/Blog/${blog.id}`} key={blog.id}>
              <BlogCard
                key={blog.id}
                title={blog.title}
                image_url={blog.hero}
              />
            </Link>
          ))}
      </div>
    </>
  );
}

export default BlogCarousel;
