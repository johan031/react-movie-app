import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { useGlobalContext } from "../context";

// `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API}&language=en-US` VIDEO API ENDPOINT

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const { image_api } = useGlobalContext();

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

  const getVideo = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API}&language=en-US`
      );
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const getImages = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_API}&language=en-US`
      );
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovie();
    getVideo();
    getImages();
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
    <section>
      <Navbar />
      <div
        // style={{
        //   backgroundImage: `url(${image_api}/${backdrop_path})`,
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        //   height: "100vh",
        // }}

        className="signle-movie__container"
      >
        <img
          className="signle-movie__poster"
          src={`${image_api}/${poster_path}`}
          alt=""
        />
        <div className="single-movie__info">
          <h1 className="signle-movie__title">{title}</h1>
          <p className="signle-movie__desc">{overview}</p>
          <div className="signle-movie__genres">
            {genres &&
              genres.map((genre) => {
                const { id, name } = genre;
                return <span key={id}> {name} </span>;
              })}
          </div>
          <div></div>
          <span className="signle-movie__rating">{rating}</span>
          <div></div>
          <span className="signle-movie__date">{date}</span>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
