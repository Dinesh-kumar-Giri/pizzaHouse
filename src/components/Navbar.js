  
import React from "react";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_text">
        <div className="logo">
          <img src={require('../images/logo.png')} alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">Menu</Link>
          </li>
          <li>
            <Link to="">Shop</Link>
          </li>
          <li>
            <Link to="">News</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;