import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../../content/blogs";

function Blog() {
  const { blogId } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(blogId));

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  const { title, date, location, content, images } = blog;

  return (
    <div>
      <h1>{title}</h1>
      <p>
        {date} - {location}
      </p>
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Blog ${blogId} - ${index}`} />
        ))}
      </div>
      <div>{content}</div>
    </div>
  );
}

export default Blog;
