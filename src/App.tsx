import "./App.css";

import About from "./components/About";
import Projects from './components/Projects';
import GraphicDesign from './components/GraphicDesign';
import Art from './components/Art';
import End from './components/End';
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <GraphicDesign />
      <Art />
      <End />
    </div>
  )
}

export default App