import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <AiOutlineHome className={styles.nav} />
      </Link>
    </nav>
  );
};

export default Navbar;
