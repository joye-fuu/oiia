import "./App.css";

import About from "./components/About";
import Projects from './components/projects/Projects';
import GraphicDesign from './components/GraphicDesign';
import Art from './components/Art';
import End from './components/End';

const App = () => {

  return (
    <div>
      <About />
      <Projects />
      <GraphicDesign />
      <Art />
      <End />
    </div>
  )
}

export default App