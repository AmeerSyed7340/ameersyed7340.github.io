import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Socials from "./components/Socials";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Socials />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
