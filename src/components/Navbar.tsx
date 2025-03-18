import React from 'react'
import "./components.css"

const Navbar = () => {

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='navbar'>
      <button onClick={() => scrollToSection("about")} className="nav-button">About</button>
      <button onClick={() => scrollToSection("projects")} className="nav-button">Projects</button>
      <button onClick={() => scrollToSection("graphic-design")} className="nav-button">Graphic design</button>
      <button onClick={() => scrollToSection("art")} className="nav-button">Art</button>
    </div>
  )
}

export default Navbar