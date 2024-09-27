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
      <div style={{ padding: '280px 0'}}>
        <h1 className="old-standard-tt-regular-italic">Moesha Keswani</h1>
        <h2 className="old-standard-tt-regular-italic-small">Software Engineer</h2>
      </div>
      
      <About/>

      <div  id="projects" style={{ padding: '20px 0'}}>
        <h2 className="old-standard-tt-regular-italic-small">Projects</h2>
      </div>
      <Projects/>
      <Projects/>
      
      <Skills/>
      <Contact/>

    </main>
  );
}

export default App;