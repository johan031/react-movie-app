import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/sdadasd">
          <a>
            <AiOutlineHome />
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
