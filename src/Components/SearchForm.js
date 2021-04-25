import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  const movieSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={movieSearch}>
        <h3>search</h3>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
      </form>
    </div>
  );
};

export default SearchForm;
