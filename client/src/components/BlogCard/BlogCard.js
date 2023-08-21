import React from "react";
import "./BlogCard.css";

function BlogCard({ title, image_url }) {
  return (
    <div className="blog-card-container">
      <h1>{title}</h1>
      <img src={image_url} alt="title" />
    </div>
  );
}

export default BlogCard;
