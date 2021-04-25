import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";

const FeaturedMovies = () => {
  const [movies, setMovies] = useState([]);

  const { featured_movies, image_api } = useGlobalContext();

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
    <div>
      {movies.length &&
        movies.map((movie) => {
          const {
            id,
            title,
            overview,
            poster_path: poster,
            vote_average: rating,
            backdrop_path: background,
          } = movie;
          return (
            <div key={id}>
              <h4>{title}</h4>
              <h5>{rating}</h5>
              <p>{overview}</p>
              <img src={`${image_api}/${poster}`} alt={title} />
            </div>
          );
        })}
    </div>
  );
};

export default FeaturedMovies;
