  
import React from "react";
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_text">
        <div className="logo">
          <img src={require('../images/logo.png')} alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <NavLink to="" className="alink">Home</NavLink>
          </li>
          <li>
            <NavLink to="" className="alink">Menu</NavLink>
          </li>
          <li>
            <NavLink to="" className="alink">Shop</NavLink>
          </li>
          <li>
            <NavLink to="" className="alink">News</NavLink>
          </li>
          <li>
            <NavLink to="" className="alink">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;