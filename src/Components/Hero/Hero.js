import React from "react";
import Navbar from "../Navbar";
import SearchForm from "../SearchForm";
import styles from "./hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div>
        <Navbar />
        <SearchForm />
      </div>
    </section>
  );
};

export default Hero;
