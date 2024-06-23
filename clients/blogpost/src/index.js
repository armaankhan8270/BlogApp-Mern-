import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Post from "./Components/Post";
import Allposts from "./Components/Allposts";
import Signup from "./Components/Signup";
import { GlobalStateApiContext, StateApiContext } from "./context/Api";
import Navbar from "./Components/Navbar";
import CreatePost from "./Components/CreatePost";
import SearchBlog from "./Components/Searc";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateApiContext>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<CreatePost />} />
        <Route path="/allpost" element={<Allposts />} />
        <Route path="/createblog" element={<CreatePost />} />
        <Route path="/search" element={<SearchBlog />} />
        <Route path="/p" element={<Post />} />
      </Routes>
    </BrowserRouter>
  </StateApiContext>
);
