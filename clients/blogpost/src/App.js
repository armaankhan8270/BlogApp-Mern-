import "./App.css";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center">App</h1>
      <Navbar />
      <Post />
    </div>
  );
}

export default App;
