import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Blog.css";
import PageHero from "../../components/PageHero/PageHero";
import BlogCarousel from "../../components/BlogCarousel/BlogCarousel";

function Blog() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://michael-tblog-826d014d0fcf.herokuapp.com/article/${blogId}`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch blog.");
        return response.json();
      })
      .then((data) => setBlog(data))
      .catch((error) => console.error(error));
  }, [blogId]);

  if (!blog) {
    return <div>Loading...</div>;
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
