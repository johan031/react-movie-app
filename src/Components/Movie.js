import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const Movie = ({
  id,
  title,
  overview,
  poster_path: poster,
  vote_average: rating,
  backdrop_path: background,
}) => {
  const { image_api } = useGlobalContext();

  return (
    <div>
      <h4>{title}</h4>
      <img src={`${image_api}/${poster}`} alt="" />
      <Link to={`/movie/${id}`}>details</Link>
    </div>
  );
};

export default Movie;
