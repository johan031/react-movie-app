import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import Movie from "./FeaturedMovie";
import styles from "./featured.module.css";

const FeaturedMovies = () => {
  const { movies } = useGlobalContext();

  return (
    <section>
      <div className={styles.heading_box}>
        <h2 className={styles.heading}>Popular Movies</h2>
      </div>
      <div className={styles.container}>
        {movies.length &&
          movies.map((movie) => {
            return <Movie key={movie.id} {...movie} />;
          })}
      </div>
    </section>
  );
};

export default FeaturedMovies;
