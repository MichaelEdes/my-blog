import React from "react";
import blogs from "../../content/blogs";
import BlogCard from "../BlogCard/BlogCard";
import "./BlogCarousel.css";
import { Link } from "react-router-dom";

function BlogCarousel() {
  return (
    <>
      <h1>Recent Vlogs</h1>
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
