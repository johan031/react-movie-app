import React from "react";
import { useGlobalContext } from "../context";

const MovieList = () => {
  const { movies, featuredMovies } = useGlobalContext();
  console.log(featuredMovies);
  return (
    <div>
      {movies.map((movie) => {
        const { id, title, overview, poster_path: poster } = movie;
        return (
          <div key={id}>
            <h4>{title}</h4>
            <p>{overview}</p>
            <img src={poster} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default MovieList;
