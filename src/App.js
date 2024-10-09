import './App.css';
import React from "react";
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import Navbar from "./components/Navbar.js"
import Projects from "./components/Projects.js"
import Skills from "./components/Skills.js"
import ScrollToTopButton from './components/scrollTop.js';
import Stars2 from './components/Stars2.js';

function App() {
  return (
    <main>
      <Navbar/>
      <Stars2/>
      <ScrollToTopButton/>
      <div style={{ padding: '100px 0 20px 0'}}>
        <About/>
      </div>
      <div id="projects" style={{ padding: '60px 0 20px 0'}}>
        <h2>Projects</h2>
      </div>
      <Projects/>

      <div id="skills">
        <h2 style={{ padding: '60px 0px 40px 0'}}>Skills & Technologies</h2>
        <Skills/>
      </div>

      <div id="contact">
        <h2>Contact Me</h2>
      </div>
      <Contact/>
    </main>
  );
}

export default App;