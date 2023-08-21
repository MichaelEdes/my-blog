import React from "react";
import "./HomePage.css";
import PageHero from "../../components/PageHero/PageHero";
import BlogCarousel from "../../components/BlogCarousel/BlogCarousel";

function HomePage() {
  return (
    <div className="home-page-container">
      <PageHero
        hero_url={
          "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-346529.jpg&fm=jpg"
        }
        title={"Welcome to my blog"}
      />
      <h1>Hello, Im Michael. Welcome to my travelling blog.</h1>
      <div className="blog-intro">
        <pre>
          {`I'm thrilled to have you join me on my incredible journey as I traverse the globe, one adventure at a time. From the bustling cityscapes of urban metropolises to the serene beauty of hidden nature spots, I'm on a mission to explore, learn, and share my experiences with you.

Throughout this blog, you'll find a treasure trove of stories, vivid descriptions, and captivating photographs that showcase my escapades. You'll also discover valuable tips and insights to help you plan your own adventures, whether it's finding the best local cuisine or uncovering hidden gems off the beaten path.

As a passionate traveler, I believe that the world is brimming with wonder and excitement, and I'm eager to share my curiosity and enthusiasm with you. So, pack your virtual bags, fasten your seatbelts, and let's embark on a thrilling journey together through the pages of Wanderlust Chronicles. Get ready to be inspired and awaken your inner explorer!
        `}
        </pre>
      </div>
      <BlogCarousel />
    </div>
  );
}

export default HomePage;
