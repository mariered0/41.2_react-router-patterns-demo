import React from "react";
import Nav from "./Nav";
import Routes from "./Routes";
// import { BrowserRouter, Route, Navigate } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";
// import BlogHome from "./BlogHome";
// import Post from "./Post";
// import NotFound from "./NotFound";
// import AdminDashboard from "./AdminDashboard";
import "./App.css"

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Nav />
      <Routes />
        {/* <Routes />
        <Route exact path="/about" element={ <About /> } />
        <Route exact path="/contact" element={ <Contact /> } />
        <Route exact path="/blog/:slug" element={ <Post /> } />
        <Route exact path="/blog" element={ <BlogHome /> } />
        <Route exact path="/" element={ <Home /> } />
        
        <Route exact path="/admin" element={ <AdminDashboard /> } />
        <Route path="*" element={ <NotFound /> } />
        <Route path="*" element={ <Navigate to="/about" /> } />
      </Routes> */}
     {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
