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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StateApiContext>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Post />} />
        <Route path="/allpost" element={<Allposts />} />
        <Route path="/allpost" element={<Allposts />} />
      </Routes>
    </BrowserRouter>
  </StateApiContext>
);
