import "./App.css";
import Allposts from "./Components/Allposts";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import { GlobalStateApiContext } from "./context/Api";

function App() {
  const { state } = GlobalStateApiContext();
  return (
    <div className="App mb-12">
      <h1 className="text-3xl font-bold text-center">App {state}</h1>
      <Navbar />
      {/* <Post /> */}
      {/* <Login /> */}
      {/* <Allposts /> */}
    </div>
  );
}

export default App;
