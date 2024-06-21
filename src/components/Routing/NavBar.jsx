import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

function NavBar() {
    return (
        <>
        <nav>
           <Link to="/">Home</Link>
           <Link to="/About">About</Link>
        </nav>

        <Routes>
            <Route path='/' element={ < Home /> }></Route>
            <Route path='/about' element={ < About />}></Route>
        </Routes>
        </>
    )
}

export default NavBar;