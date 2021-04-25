import React from "react";
import Hero from "../Components/Hero";
import FeaturedMovies from "../Components/FeaturedMovies";
import SearchForm from "../Components/SearchForm";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Hero />
      <SearchForm />
      <FeaturedMovies />
    </div>
  );
};

export default Home;
