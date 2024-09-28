import './App.css';
import React from "react";
import About from "./components/About.js"
import Contact from "./components/Contact.js"
import Navbar from "./components/Navbar.js"
import Projects from "./components/Projects.js"
import Skills from "./components/Skills.js"


function App() {
  return (
    <main>
      <Navbar/>
      <div style={{ padding: '170px 0'}}>
        <h1 className="old-standard-tt-regular-italic">Moesha Keswani</h1>
        <h2 className="old-standard-tt-regular-italic-small">hire me!</h2>
      </div>
      
      <About/>

      <div id="projects" style={{ padding: '20px 0'}}>
        <h2 className="old-standard-tt-regular-italic-small">Projects</h2>
      </div>
      <Projects/>
      <Projects/>

      <div id="skills">
        <h2 style={{ padding: '40px 0px 40px 0'}} className="old-standard-tt-regular-italic-small">Skills</h2>
        <Skills/>
      </div>

      <div id="contact" style={{ padding: '60px 0 0 0'}}>
        <h2 className="old-standard-tt-regular-italic-small">Contact Me</h2>
      </div>
      <Contact/>

      {/* <div style={{ padding: '100px 0'}}></div> */}
    </main>
  );
}

export default App;