import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const { query, api_endpoint } = useGlobalContext();

  const fetchSearchedMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.results.length > 1) {
        setMovies(data.results);
      } else {
        console.log("nema filmova");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (query) {
      fetchSearchedMovies(`${api_endpoint}&query=${query}`);
    } else {
      setMovies([]);
    }
  }, [query]);

  return (
    <div>
      {movies &&
        movies.map((movie) => {
          const { id, title, poster_path: poster } = movie;
          return (
            <div key={id}>
              <h4>{title}</h4>
              <span>
                <Link to={`/movie/${id}`}>details</Link>
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default MovieList;
