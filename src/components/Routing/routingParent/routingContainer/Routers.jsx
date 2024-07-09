import React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import User from "./User";
import Authentication from './Authentication';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/user" element={<User />}>
      <Route path="/user/:authenticate" element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
}

export default Routers;
