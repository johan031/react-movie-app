import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import Movie from "./Movie";
import styles from "./movieList.module.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({ show: false, msg: "" });
  const { query, api_endpoint } = useGlobalContext();

  const fetchSearchedMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.results.length) {
        setMovies(data.results.slice(0, 10));
        setError({ show: false, msg: "" });
      } else {
        setMovies([]);
        setError({ show: true, msg: "No movies found!" });
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
      setError({ show: false, msg: "" });
    }
  }, [query]);

  return (
    <section>
      <div className={styles.list}>
        {movies &&
          movies.map((movie) => {
            return <Movie key={movie.id} {...movie} />;
          })}
      </div>
      <div>
        <h4 className={styles.error}>{error && error.msg}</h4>
      </div>
    </section>
  );
};

export default MovieList;
