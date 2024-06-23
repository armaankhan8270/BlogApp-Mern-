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
    <div className="">
      <Signup />
    </div>
  );
}

export default App;
