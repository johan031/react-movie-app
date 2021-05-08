import React from "react";
import Hero from "../Components/Hero/Hero";
import FeaturedMovies from "../Components/Featured/FeaturedMovies";

const Home = () => {
  return (
    <div className="bodyContainer">
      <Hero />
      <FeaturedMovies />
    </div>
  );
};

export default Home;
