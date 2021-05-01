import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
import styles from "./featured.module.css";
import { AiOutlineSearch, AiOutlineStar } from "react-icons/ai";

const FeaturedMovie = ({
  id,
  title,
  overview,
  poster_path: poster,
  vote_average: rating,
  backdrop_path: background,
}) => {
  const { image_api } = useGlobalContext();

  return (
    <div className={styles.item}>
      <Link className={styles.link} to={`/movie/${id}`}>
        <AiOutlineSearch className={styles.search} />
      </Link>
      <img
        className={styles.image}
        src={`${image_api}/${background}`}
        alt={title}
      />
      <div className={styles.item_info}>
        <h4 className={styles.title}>
          {title.length > 35 ? `${title.slice(0, 35)}...` : title}
        </h4>
        <div className={styles.rating_info}>
          <span className={styles.rating_num}>{rating}</span>
          <span className={styles.rating_star}>
            <AiOutlineStar />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMovie;
