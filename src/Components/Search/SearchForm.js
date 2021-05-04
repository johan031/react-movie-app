import React from "react";
import { useGlobalContext } from "../../context";
import MovieList from "../List/MovieList";
import styles from "./search.module.css";
import { AiOutlineSearch, AiOutlineStar } from "react-icons/ai";

const SearchForm = () => {
  const { setQuery } = useGlobalContext();

  const movieSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={movieSearch} className={styles.form}>
        <AiOutlineSearch className={styles.icon} />
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
