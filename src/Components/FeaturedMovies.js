import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import Movie from "./Movie";

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);

  const { featured_movies } = useGlobalContext();

  useEffect(() => {
    const fetchFeaturedMovies = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.results);
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFeaturedMovies(featured_movies);
  }, []);

  return (
    <section>
      {movies.length &&
        movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}
    </section>
  );
};

export default FeaturedMovies;
