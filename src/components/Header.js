import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">My todo list!</Link>
            <Link to="/completed">My completed List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
