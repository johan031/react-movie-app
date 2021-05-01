import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">
          <span>
            <AiOutlineHome />
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
