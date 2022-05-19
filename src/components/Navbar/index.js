import React, { useState } from "react";
import { NavbarMain } from "./NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [ click, setClick ] = useState(false);

  const handleClick = () => {
      setClick(!click)
  }

  return (
      <NavbarMain>
          <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <nav className={click ? "nav-menu active" : "nav-menu"}>
              <ul>
                <Link to={'/allmovies'}><li onClick={handleClick}>Todos os Filmes</li></Link>
                <Link to={'/'}><li onClick={handleClick}>Home</li></Link>
                <Link to={'/login'}><li onClick={handleClick}>Login</li></Link>
                <Link to={'/register'}><li onClick={handleClick}>Dashboard</li></Link>
              </ul>
          </nav>
      </NavbarMain>
  );
}

export default Navbar;