import NavBar from "./components/NavBar";
import Hero from "./components/hero-section/Hero";
import Information from "./components/Information";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container items-center mx-auto">
        <Hero />
        <Information />
      </div>
    </div>
  );
}

export default App;
