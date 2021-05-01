import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useGlobalContext } from "../context";

// `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API}&language=en-US` VIDEO API ENDPOINT

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const { image_api } = useGlobalContext();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API}&language=en-US&external_source=imdb_id`
        );
        const data = await res.json();

        setMovie(data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, []);

  const {
    genres,
    title,
    overview,
    poster_path,
    backdrop_path,
    vote_average: rating,
    release_date: date,
  } = movie;

  return (
    <div>
      <Navbar />
      <h1>{title}</h1>
      <p>{overview}</p>
      <div>
        {genres &&
          genres.map((genre) => {
            const { id, name } = genre;
            return <span key={id}> {name} </span>;
          })}
      </div>
      <img src={`${image_api}/${backdrop_path}`} alt="" />
      <div></div>
      <span>{rating}</span>
      <div></div>
      <span>{date}</span>
    </div>
  );
};

export default SingleMovie;
