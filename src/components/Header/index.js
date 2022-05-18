import React from "react";
import { HeaderBar } from './headerStyles';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import Navbar from "../Navbar";

const Header = ({black}) => {
    
    return (
    <HeaderBar>
    <header className={black ? 'black' : ''}>
        <div className="">
            <Link to={'/'}>
                <img src={logo} alt={logo}/>
            </Link>
        </div>
        <Navbar/>
    </header>
    </HeaderBar>
    );
}

export default Header;