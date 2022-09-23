import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Post from "./Components/Post";
import Allposts from "./Components/Allposts";
import Signup from "./Components/Signup";
import { StateApiContext } from "./context/Api";
import Navbar from "./Components/Navbar";
import CreatePost from "./Components/CreatePost";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateApiContext>
    <BrowserRouter>
      {/* <App /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Post />} />
        <Route path="/allpost" element={<Allposts />} />
        <Route path="/createblog" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  </StateApiContext>
);
