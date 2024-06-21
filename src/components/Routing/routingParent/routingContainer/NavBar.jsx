import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Routers from './Routers';

function NavBar() {
    return (
        <>
        <nav>
           <Link to="/">Home</Link>
           <Link to="/About">About</Link>
        </nav>

        < Routers />    
        </>
    )
}

export default NavBar;