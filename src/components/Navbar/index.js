import React, { useState } from "react";
import { NavbarMain } from "./NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [ click, setClick ] = useState(false);
  const [ user, setUser ] = useState(false);

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
                <Link to={'/'}><li onClick={handleClick}>Todos os Filmes</li></Link>
                <Link to={'/top'}><li onClick={handleClick}>Populares</li></Link>
                {user 
                ? <Link to={'/login'}><li onClick={handleClick}>Login</li></Link>
                : <Link to={'/register'}><li onClick={handleClick}>Cadastrar</li></Link>
                }
              </ul>
          </nav>
      </NavbarMain>
  );
}

export default Navbar;