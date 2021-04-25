import React from "react";
import Hero from "../Components/Hero";
import MovieList from "../Components/MovieList";
import SearchForm from "../Components/SearchForm";

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Hero />
      <SearchForm />
      <MovieList />
    </div>
  );
};

export default Home;
