import NavBar from "./components/NavBar";
import Homepage from "./components/Homepage";
import Search from "./components/Search";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
