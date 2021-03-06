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
                <Link to={'/'}><li className="nav-item" onClick={handleClick}>Home</li></Link>
                <Link to={'/top'}><li className="nav-item" onClick={handleClick}>Populares</li></Link>
                <Link to={'/login'}><li className="nav-item" onClick={handleClick}>Login</li></Link>
                <Link to={'/register'}><li className="nav-item" onClick={handleClick}>Cadastrar</li></Link>
                
              </ul>
          </nav>
      </NavbarMain>
  );
}

export default Navbar;