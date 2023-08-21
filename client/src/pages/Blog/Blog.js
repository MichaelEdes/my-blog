import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../../content/blogs";
import "./Blog.css";
import PageHero from "../../components/PageHero/PageHero";
import BlogCarousel from "../../components/BlogCarousel/BlogCarousel";

function Blog() {
  const { blogId } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(blogId));

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  const { title, date, location, content, hero } = blog;

  return (
    <div>
      <h1>{title}</h1>
      <p>
        {date} - {location}
      </p>
      <PageHero hero_url={hero} />
      <div className="blog-content">
        <pre>{content}</pre>
      </div>
      <BlogCarousel />
    </div>
  );
}

export default Blog;
