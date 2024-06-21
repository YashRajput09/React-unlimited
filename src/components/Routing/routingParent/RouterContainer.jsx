import React from 'react';
import NavBar from '../NavBar';
import Home from '../Home';
import About from '../About';

function RouterContainer(){
    return (
        <div className="w-full h-screen bg-zinc-200">
            < NavBar/>
            {/* < Home/>
            < About/> */}
        </div>
    )
}
export default RouterContainer;