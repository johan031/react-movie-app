import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import Movie from "./FeaturedMovie";
import styles from "./featured.module.css";

const FeaturedMovies = () => {
  const { movies } = useGlobalContext();

  return (
    <section className={styles.container}>
      {movies.length &&
        movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}
    </section>
  );
};

export default FeaturedMovies;
