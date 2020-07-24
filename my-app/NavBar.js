import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul>
      <li>
        <Link to="/Homepage.js">Black Mental Health</Link>
      </li>
      <li>
        <Link to="/about.js">About</Link>
      </li>
      <li>
        <Link to="/contact.js">Contact</Link>
      </li>
    </ul>
  );
}
export default NavBar;
