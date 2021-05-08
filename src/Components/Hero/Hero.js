import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../Search/SearchForm";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* <Navbar /> */}
        <SearchForm />
      </div>
      <div className={styles.hero_box}>
        <h1 className={styles.hero_heading}>movie app</h1>
        <p className={styles.hero_api}>
          powered by{" "}
          <a href="https://www.themoviedb.org/" target="__blank">
            tmbdAPI
          </a>
        </p>
      </div>
    </section>
  );
};

export default Hero;
