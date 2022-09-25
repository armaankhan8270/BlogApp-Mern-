import "./App.css";
import Allposts from "./Components/Allposts";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import { GlobalStateApiContext } from "./context/Api";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";

function App() {
  const { user } = GlobalStateApiContext();
  return (
    <div className="App mb-12">
      <h1 className="text-3xl font-bold text-center">App </h1>
      {/* <Login /> */}
      <Signup />/{/* <Post /> */}
      {/* <Allposts /> */}
    </div>
  );
}

export default App;
