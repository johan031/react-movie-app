import React, { useState, useEffect, useContext } from "react";

export const api_endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API}`;
export const featured_movies = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API}&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [movies, setMovies] = useState([]);
  const [featuredMovies, setFeaturedMovies] = useState([]);
  const [query, setQuery] = useState("test");

  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

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

  const fetchFeaturedMovies = async (url) => {
    try {
      const res = await fetch(url);
      const featuredData = await res.json();
      setFeaturedMovies(featuredData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${api_endpoint}&query=${query}`);
    fetchFeaturedMovies(featured_movies);
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
        featuredMovies,
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
