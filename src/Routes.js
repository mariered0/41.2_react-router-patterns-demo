import React from "react";
import { Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import BlogHome from "./BlogHome";
import Post from "./Post";

function Routes() {
  return (
    // <BrowserRouter>
      <Routes>
        <Route exact path="/about" element={ <About /> } />
        <Route exact path="contact" element={ <Contact /> } />
        <Route exact path="blog/:slug" element={ <Post /> } />
        <Route exact path="blog" element={ <BlogHome /> } />
        <Route exact path="/" element={ <Home /> } />
        <Navigate to="/" />
      </Routes>
    // </BrowserRouter>
  );
}

export default Routes;
