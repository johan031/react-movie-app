import React, { useState, useEffect, useContext } from "react";

export const api_endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API}`;
const featured_movies = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API}&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`;
const image_api = `https://image.tmdb.org/t/p/w500`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState(null);

  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.results.length > 1) {
        setMovies(data.results);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: "There is no movies!" });
        console.log("nema");
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovies(`${api_endpoint}&query=${query}`);
  }, [query]);

  return (
    <AppContext.Provider
      value={{
        loading,
        error,
        movies,
        query,
        setQuery,
        setMovies,
        featured_movies,
        image_api,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
