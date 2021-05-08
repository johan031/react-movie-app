import React from "react";
import { useGlobalContext } from "../../context";
import MovieList from "../List/MovieList";
import styles from "./search.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const SearchForm = () => {
  const { setQuery } = useGlobalContext();

  const movieSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={movieSearch} className={styles.form}>
        <input
          className={styles.search}
          type="text"
          placeholder="Search for movie"
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <button className={styles.btn}>
          <AiOutlineSearch className={styles.icon} />
        </button> */}
      </form>
      <MovieList />
    </div>
  );
};

export default SearchForm;
