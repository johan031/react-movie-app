import React from "react";
import { useGlobalContext } from "../../context";
import MovieList from "../List/MovieList";
import styles from "./search.module.css";

const SearchForm = () => {
  const { setQuery } = useGlobalContext();

  const movieSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={movieSearch}>
        <input
          className={styles.search}
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <MovieList />
    </div>
  );
};

export default SearchForm;
