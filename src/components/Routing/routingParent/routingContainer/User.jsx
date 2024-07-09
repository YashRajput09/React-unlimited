import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function User(){
    return(
        <>
        <div className="flex gap-10 mb-3">
        <Link to={"/user/login"} className="text-xl font-semibold">Login</Link>
        <Link to={"/user/signup"} className="text-xl font-semibold">SignUp</Link>
        </div>
        <Outlet />
        </>
    )
}

export default User;