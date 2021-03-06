import React, { useState, useEffect, useContext } from "react";

const api_endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API}&sort_by=popularity`;
const featured_movies = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API}&sort_by=popularity.desc&include_adult=false&include_video=true&page=1`;
const image_api = `https://image.tmdb.org/t/p/w500`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const fetchFeaturedMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFeaturedMovies(featured_movies);
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        movies,
        query,
        setQuery,
        setMovies,
        featured_movies,
        image_api,
        api_endpoint,
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
