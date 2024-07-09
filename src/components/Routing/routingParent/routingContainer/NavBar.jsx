import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Routers from "./Routers";

function NavBar() {
  return (
    <>
      <nav className="flex gap-10 p-3">
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "#FCA5A5" : "",
              fontWeight: e.isActive ? "bolder" : "",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "#FCA5A5" : "",
              fontWeight: e.isActive ? "bolder" : "",
            };
          }}
          to="/about"
        >
          About
        </NavLink>

        <NavLink 
        style={(e)=>{
            return{
                color: e.isActive ?  "#FCA5A5" : "",
                fontWeight: e.isActive ? "bolder" : "",
            }
        }}
        to={"/user"}>User</NavLink>
      </nav>

      <Routers />
    </>
  );
}

export default NavBar;
