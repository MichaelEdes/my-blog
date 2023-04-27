import React from "react";
import "./PageHero.css";

function PageHero({ hero_url, title }) {
  return (
    <div className="page-hero-container">
      <h1>{title}</h1>
      <img src={hero_url} alt={title} />
    </div>
  );
}

export default PageHero;
