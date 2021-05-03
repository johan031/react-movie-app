import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import styles from "./movieList.module.css";

const Movie = ({ id, title, poster_path: poster, release_date: date }) => {
  const { image_api } = useGlobalContext();

  return (
    <div className={styles.item}>
      <Link to={`/movie/${id}`}>
        <img
          className={styles.item_img}
          src={`${image_api}/${poster}`}
          alt={title}
        />
      </Link>
      <div className="item_info">
        <h4 className={styles.item_title}>{title}</h4>
        <span className={styles.item_date}>{date && date.slice(0, 4)}</span>
      </div>
    </div>
  );
};

export default Movie;
