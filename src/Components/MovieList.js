import React from "react";
import { useGlobalContext } from "../context";

const MovieList = () => {
  const { movies } = useGlobalContext();

  return (
    <div>
      {movies.length &&
        movies.map((movie) => {
          const { id, title, poster_path: poster } = movie;
          return (
            <div>
              <h4>{title}</h4>
            </div>
          );
        })}
    </div>
  );
};

export default MovieList;
