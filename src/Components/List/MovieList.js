import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import Movie from "./Movie";
import styles from "./movieList.module.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const { query, api_endpoint } = useGlobalContext();

  const fetchSearchedMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.results.length > 1) {
        setMovies(data.results.slice(0, 10));
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
    <div className={styles.list}>
      {movies &&
        movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}
    </div>
  );
};

export default MovieList;
